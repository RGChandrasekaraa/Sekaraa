import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>sorry the page you are looking for is not found</p>
      <Link href="/">Go back to home</Link>
    </div>
  );
};
export default NotFound;
