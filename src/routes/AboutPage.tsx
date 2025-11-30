import { Link } from '@tanstack/react-router'

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="text-muted-foreground">
        This example uses <code>@tanstack/react-router</code> code-based routing with a
        root layout and two pages.
      </p>
      <p>
        <Link to="/" className="text-primary underline-offset-4 hover:underline">
          Go back home
        </Link>
      </p>
    </div>
  )
}
