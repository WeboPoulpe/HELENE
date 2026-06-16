import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core'

export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})
