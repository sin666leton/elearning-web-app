import { Link } from 'react-router-dom';
import useRegister from '../../hooks/useRegister';

export default function FormRegister() {
    const {
        form: {
            register,
            formState: { errors }
        },
        handleRegister,
        isLoading,
        unexpectedError
    } = useRegister()

    return (
        <form action="#" method="POST" onSubmit={handleRegister} className="w-full">
            {unexpectedError && (
                <div className="text-sm text-center bg-red-50 border border-red-200 text-red-600 font-medium py-3 px-4 rounded-md mb-6">
                    {unexpectedError}
                </div>
            )}

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-sm font-semibold text-blue-500">Nama</label>
                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                            disabled={isLoading}
                            className="w-full border border-mist-400 rounded-sm py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200"
                            placeholder="Nama lengkap anda"
                        />
                        {errors.name && <p className="text-xs text-red-500 font-medium mt-1">* {errors.name.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="role_id" className="block text-sm font-semibold text-blue-500">Peran (Role)</label>
                        <select
                            id="role_id"
                            {...register("role_id")}
                            disabled={isLoading}
                            defaultValue=""
                            className="w-full border border-mist-400 rounded-sm py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200"
                        >
                            <option value="" disabled>Pilih peran...</option>
                            <option value="1">Siswa</option>
                            <option value="2">Guru</option>
                        </select>
                        {errors.role_id && <p className="text-xs text-red-500 font-medium mt-1">* {errors.role_id.message}</p>}
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-semibold text-blue-500">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        disabled={isLoading}
                        className="w-full border border-mist-400 rounded-sm py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200"
                        placeholder="Email anda"
                    />
                    {errors.email && <p className="text-xs text-red-500 font-medium mt-1">* {errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label htmlFor="password" className="block text-sm font-semibold text-blue-500">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            disabled={isLoading}
                            className="w-full border border-mist-400 rounded-sm py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200"
                        />
                        {errors.password && <p className="text-xs text-red-500 font-medium mt-1">* {errors.password.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="repeatPassword" className="block text-sm font-semibold text-blue-500">Ulangi Password</label>
                        <input
                            type="password"
                            id="repeatPassword"
                            {...register("repeatPassword")}
                            disabled={isLoading}
                            className="w-full border border-mist-400 rounded-sm py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200"
                        />
                        {errors.repeatPassword && <p className="text-xs text-red-500 font-medium mt-1">* {errors.repeatPassword.message}</p>}
                    </div>
                </div>

                {/* Row 4: Submit Button & Navigation */}
                <div className="pt-4 space-y-3 flex flex-col items-center">
                    <p className="text-center text-gray-500 text-sm">Sudah memiliki akun? <Link to={'/login'} className="text-blue-500 hover:text-blue-600 font-medium">login disini</Link></p>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-blue-500 text-white font-semibold w-full max-w-xs py-3 rounded-full cursor-pointer hover:bg-blue-600 transition-all disabled:opacity-50"
                    >
                        {isLoading ? 'Loading...' : 'Daftar'}
                    </button>
                </div>
            </div>
        </form>
    )
}