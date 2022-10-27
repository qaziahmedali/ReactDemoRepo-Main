import ICONSPATH from "./svg/path";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <div role="status">
        <svg
          aria-hidden="true"
          className="mr-2 w-8 h-8 text-gray-200 mt-8 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns={ICONSPATH.xmlns}
        >
          <path d={ICONSPATH.SPINNER} fill="currentColor" />
          <path d={ICONSPATH.SPINNER_WITH_COLOUR} fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
