import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export default function FormLogin() {
    const {
        form: {
            register,
            formState: { errors }
        },
        handleLogin,
        isLoading,
        unexpectedError
    } = useLogin()

    return (
        <form action="#" method="POST" onSubmit={handleLogin}>
            {unexpectedError && <h3 className="text-sm text-center bg-red-300 border-2 border-red-500 rounded-md text-red-500 font-semibold py-4 mb-8">{unexpectedError}</h3>}
            <div className="space-y-4">
                <div className="block space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-blue-500">Email</label>
                    <input type="email" id="email" {...register("email")} disabled={isLoading} className="min-w-full border border-mist-400 rounded-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200" placeholder="Email anda" />
                    {errors.email && <p className="text-sm text-red-500 font-semibold leading-3">* {errors.email.message}</p>}
                </div>
                <div className="block space-y-2">
                    <label htmlFor="password" className="block text-sm font-semibold text-blue-500">Password</label>
                    <input type="password" id="password" {...register("password")} disabled={isLoading} className="min-w-full border border-mist-400 rounded-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200" />
                    {errors.password && <p className="text-sm text-red-500 font-semibold">* {errors.password.message}</p>}
                </div>
                <div className="block pt-4">
                    <p className="text-center text-gray-500 pb-2 md:text-sm">Belum memiliki akun? <Link to={'/'} className="text-blue-500 hover:text-blue-600">daftar disini</Link></p>
                    <button type="submit" disabled={isLoading} className="bg-blue-500 text-white font-semibold w-full py-3 rounded-full cursor-pointer hover:bg-blue-600 transition-all disabled:opacity-50">
                        {isLoading ? 'Loading...' : 'Kirim'}
                    </button>
                </div>
            </div>
        </form>
    )
}