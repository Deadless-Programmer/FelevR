import React from 'react';
import Lottie from "lottie-react";
import error from "../../assets/98642-error-404.json"
const ErrorPage = () => {
    return (
      <div>
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <Lottie className="w-96 h-96" animationData={error} />
			</h2>
			
		</div>
	</div>
</section>
      </div>
    );
};

export default ErrorPage;