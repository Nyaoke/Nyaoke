import { ShapeOption } from "@/lib/filter-types";

type PageHeadingProps = {
  shape: ShapeOption;
};

export function PageHeading({ shape }: PageHeadingProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-medium tracking-tight text-rc-text">Search for {shape} Diamonds</h1>
      <a
        href="#"
        className="mt-2 inline-block text-sm text-rc-muted underline-offset-4 transition-colors duration-150 hover:text-rc-text hover:underline"
      >
        Need help? Take our quiz 💍
      </a>
    </section>
  );
}
