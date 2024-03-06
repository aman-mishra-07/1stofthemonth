'use server';
 
import { z } from 'zod';
 
const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  notes: z.string(),
  doctor: z.string(),
  date: z.string(),                                                        
});
 
const CreateAppointment = FormSchema.omit({ id: true, date: true });
 
export async function createAppointment(formData) {

  console.log(CreateAppointment.parse(formData));
}