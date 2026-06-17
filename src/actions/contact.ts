'use server'

// V2: activate this Server Action when Neon + Resend are configured
// import { db } from '@/db'
// import { contactSubmissions } from '@/db/schema'
// import { resend } from '@/lib/resend'

export type ContactFormData = {
  name: string
  email: string
  message: string
}

export async function submitContact(_data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  // V2 implementation:
  // try {
  //   await db!.insert(contactSubmissions).values(data)
  //   await resend.emails.send({
  //     from: 'noreply@helene-foure.fr',
  //     to: 'helene@helene-foure.fr',
  //     subject: `Nouveau message de ${data.name}`,
  //     text: `De: ${data.name} <${data.email}>\n\n${data.message}`,
  //   })
  //   return { success: true }
  // } catch (error) {
  //   return { success: false, error: 'Une erreur est survenue.' }
  // }
  return { success: false, error: 'Formulaire non actif en V1.' }
}
