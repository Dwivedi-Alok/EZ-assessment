import React from "react";

export default function BrushStroke({ className }) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: "#1e3a8a",
        maskImage:
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NzAgMzEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgogIDxwYXRoIGQ9Ik0wIDBsNDcwIDB2MzFsLTQ3MCAwdi0zMyIgZmlsbD0iI2ZmZiIvPgogIDxwYXRoIGQ9Ik0yIDMwYzYuOC0xLjggMTUuMS0zLjUgMjUuMS0zLjUgMjMuMiAwIDI3LjYgNi4zIDUyLjIgNi4zIDMyLjQgMCAzMC02LjYgNTIuOS02LjYgMjQuNiAwIDI5LjcgNi4yIDU0LjIgNi4yIDMwLjggMCAyOS45LTYuNyA1My43LTYuNyAyNC45IDAgMzAuMSA2LjIgNTQuNyA2LjIgMzEuMSAwIDI5LjYtNi43IDUzLjctNi43IDI1LjIgMCAyOS44IDYuMyA1Mi45IDYuMyA3LjIgMCAxMy4zLTAuNiAxOC4xLTEuNnYtMjBoLTQ2OS4ydjIwLjUiIGZpbGw9IiMwMDAiLz4KPC9zdmc+")',
        maskSize: "100% 100%",
        maskRepeat: "no-repeat",
      }}
    ></div>
  );
}
