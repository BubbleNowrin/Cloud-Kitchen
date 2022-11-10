import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div data-aos="flip-left"
            data-aos-duration="1000" className="space-y-4 min-h-screen mb-40 mt-8">
            <Helmet>
                <title>Foodaholic -Blogs</title>
            </Helmet>
            <details className="group border-l-4 border-green-500 bg-lime-200 p-6" open>
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        What are the differences between SQL and NoSQL?
                    </h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision.

                    The differences between SQL vs NoSQL are:

                    1.SQL databases are relational, NoSQL databases are non-relational.
                    2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    4,SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </details>
            <details className="group border-l-4 border-green-500 bg-lime-300 p-6" open>
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        What is JWT, and how does it work?
                    </h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. How it works :
                    1.User sign-in using username and password or google/facebook.
                    2.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                    3.User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                    4.Resource server then verifies the authenticity of the token using the secret salt/ public key.
                </p>
            </details>
            <details className="group border-l-4 border-green-500 bg-lime-200 p-6" open>
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        What is the difference between javascript and NodeJS?</h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.
                    2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. 3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. 4.JavaScript is the most commonly used on client-side servers.	Node.js is mainly popular on the server-side.5.JavaScript is a new release of the ECMA script that works on the C++-based V8 engine. In Node.js,C++, C, and JavaScript are used.
                </p>
            </details>

            <details className="group border-l-4 border-green-500 bg-lime-300 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        How does NodeJS handle multiple requests at the same time?
                    </h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </details>
        </div>

    );
};

export default Blogs;