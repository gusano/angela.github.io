import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError() as { status: string }
  console.log(error)
  return (
    <div>
      <p>
        404 Page Not Found
      </p>
    </div>
  );
}
