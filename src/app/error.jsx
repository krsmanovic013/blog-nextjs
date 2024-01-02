"use client";

import Link from "next/link";

const Error = () => {
  return (
    <div>
      <h2>Error</h2>
      <p>Sorry, error happend!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default Error;
