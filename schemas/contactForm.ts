import { string } from 'zod'
export default {
  type: string().trim().min(1),
  name: string().optional(),
  phone: string().optional(),
  message: string({ required_error: 'Dit veld is verplicht' }).min(8, { message: 'Moet minimaal 8 karakters bevatten' }),
  email: string({ required_error: 'Dit veld is verplicht' }).email({ message: 'Dit moet een geldig e-mailadres zijn' })
}
