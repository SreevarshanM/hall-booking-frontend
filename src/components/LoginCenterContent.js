import email_id_input from "../assests/email_id_input.png";
import password_input from "../assests/password_input.png";

function LoginCenterContent() {
    return (
        <div>
            <div class="flex flex-col items-center justify-center px-6 my-20">
                <div class="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email ID</label>
                                <div class="flex">
                                    <div class="bg-sky-500 h-10 w-12 rounded-l-sm flex justify-center items-center"><img src={email_id_input} class="h-5"></img></div>
                                    <input type="email" name="email" id="email" class="bg-neutral-100 text-blue sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full h-10 p-2.5" placeholder="student@fmail.com" required="" />
                                </div>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <div class="flex">
                                    <div class="bg-sky-500 h-10 w-12 rounded-l-sm flex justify-center items-center"><img src={password_input} class="h-5"></img></div>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-neutral-100 rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full h-10 p-2.5" required="" />
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <p class="text-sm font-light text-gray-500">
                                    Don’t have an account yet? <a href="/register" class="font-medium text-sky-500 hover:underline">Register</a>
                                </p>
                            </div>
                            <button type="submit" class="w-full text-white bg-sky-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center">Login</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginCenterContent;