import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.log(error)

  return (
    <div className="text-black font-extrabold">
      <h1>404 - Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}