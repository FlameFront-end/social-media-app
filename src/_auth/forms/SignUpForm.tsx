import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as z from 'zod'

import { Button } from '@/components/ui/button.tsx'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { signUpValidation } from '@/lib/validation'

const SignUpForm: FC = () => {
	const isLoading: boolean = false

	const form = useForm<z.infer<typeof signUpValidation>>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
			username: ''
		},
		resolver: zodResolver(signUpValidation)
	})

	const onSubmit = (values: z.infer<typeof signUpValidation>) => {
		console.log(values)
	}

	return (
		<Form {...form}>
			<div className='sm:w-420 flex-center flex-col'>
				<img src='/assets/images/logo.svg' alt='logo' />

				<h2 className='h3-bold md:h2-bold pt-5 sm:tp-12'>
					Create a new account
				</h2>
				<p className='text-light-3 small-medium md:base-regular mt-2'>
					To use Snapgram, please enter your account details
				</p>

				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-5 w-full mt-4'
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										type='text'
										placeholder='Name'
										className='shad-input'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										type='text'
										placeholder='Username'
										className='shad-input'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										type='email'
										placeholder='Email'
										className='shad-input'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type='password'
										placeholder='Email'
										className='shad-input'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' className='shad-button_primary'>
						{isLoading ? (
							<div className='flex-center gap-2'>
								<Loader />
								Loading...
							</div>
						) : (
							'Sign up'
						)}
					</Button>
					<p className='text-small-regular text-light-2 text-center mt-2'>
						Already have an account?
						<Link
							to='/sign-in'
							className='text-primary-500 text-small-semibold ml-1'
						>
							Log in
						</Link>
					</p>
				</form>
			</div>
		</Form>
	)
}

export default SignUpForm