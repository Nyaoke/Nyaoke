"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { MAX_COMPARE_COUNT, type ComparisonAction, type ComparisonState } from "@/lib/comparison-types";
import { buildUrlWithComparison, comparisonIdsMatchUrl, parseComparisonIds } from "@/lib/comparison-url";

const CAP_TOAST_MESSAGE = "Compare up to 4 diamonds. Remove one to add another.";

export const DEFAULT_COMPARISON_STATE: ComparisonState = {
  selectedIds: [],
  drawerOpen: false,
};

export function comparisonReducer(state: ComparisonState, action: ComparisonAction): ComparisonState {
  switch (action.type) {
    case "add":
      if (state.selectedIds.includes(action.id)) {
        return state;
      }
      return { ...state, selectedIds: [...state.selectedIds, action.id] };
    case "remove":
      return { ...state, selectedIds: state.selectedIds.filter((id) => id !== action.id) };
    case "clear":
      return { ...state, selectedIds: [], drawerOpen: false };
    case "hydrate":
      return { ...state, selectedIds: action.ids };
    case "setDrawerOpen":
      return { ...state, drawerOpen: action.open };
    default:
      return state;
  }
}

type ComparisonContextValue = {
  selectedIds: string[];
  drawerOpen: boolean;
  isSelected: (id: string) => boolean;
  toggleDiamond: (id: string) => void;
  removeDiamond: (id: string) => void;
  clearComparison: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const ComparisonContext = createContext<ComparisonContextValue | null>(null);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsRef = useRef(searchParams);
  const stateRef = useRef<ComparisonState>(DEFAULT_COMPARISON_STATE);
  const pendingUrlIds = useRef<string | null>(null);

  searchParamsRef.current = searchParams;

  const [state, dispatch] = useReducer(
    comparisonReducer,
    searchParams,
    (params) => ({
      ...DEFAULT_COMPARISON_STATE,
      selectedIds: parseComparisonIds(params),
    }),
  );

  stateRef.current = state;

  useEffect(() => {
    const urlIds = parseComparisonIds(searchParams);
    const urlKey = urlIds.join(",");

    if (pendingUrlIds.current !== null) {
      if (pendingUrlIds.current === urlKey) {
        pendingUrlIds.current = null;
      }
      return;
    }

    if (!comparisonIdsMatchUrl(stateRef.current.selectedIds, searchParams)) {
      dispatch({ type: "hydrate", ids: urlIds });
    }
  }, [searchParams]);

  useEffect(() => {
    const currentParams = searchParamsRef.current;
    if (comparisonIdsMatchUrl(state.selectedIds, currentParams)) {
      return;
    }

    pendingUrlIds.current = state.selectedIds.join(",");
    router.replace(buildUrlWithComparison(pathname, currentParams, state.selectedIds), { scroll: false });
  }, [pathname, router, state.selectedIds]);

  const toggleDiamond = useCallback(
    (id: string) => {
      if (state.selectedIds.includes(id)) {
        dispatch({ type: "remove", id });
        return;
      }

      if (state.selectedIds.length >= MAX_COMPARE_COUNT) {
        toast(CAP_TOAST_MESSAGE, { duration: 4000 });
        return;
      }

      dispatch({ type: "add", id });
    },
    [state.selectedIds],
  );

  const removeDiamond = useCallback((id: string) => {
    dispatch({ type: "remove", id });
  }, []);

  const clearComparison = useCallback(() => {
    dispatch({ type: "clear" });
  }, []);

  const openDrawer = useCallback(() => {
    if (state.selectedIds.length === 0) {
      return;
    }
    dispatch({ type: "setDrawerOpen", open: true });
  }, [state.selectedIds.length]);

  const closeDrawer = useCallback(() => {
    dispatch({ type: "setDrawerOpen", open: false });
  }, []);

  const value = useMemo<ComparisonContextValue>(
    () => ({
      selectedIds: state.selectedIds,
      drawerOpen: state.drawerOpen,
      isSelected: (id: string) => state.selectedIds.includes(id),
      toggleDiamond,
      removeDiamond,
      clearComparison,
      openDrawer,
      closeDrawer,
    }),
    [state.selectedIds, state.drawerOpen, toggleDiamond, removeDiamond, clearComparison, openDrawer, closeDrawer],
  );

  return <ComparisonContext.Provider value={value}>{children}</ComparisonContext.Provider>;
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
}
