'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { VisitorSchema } from '@/schemas/visitorSchema'

import { Textarea } from '../ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'

function Contact() {
  const form = useForm({
    resolver: zodResolver(VisitorSchema),
    defaultValues: {
      name: '',
      email: '',
      skill: '',
      message: ''
    }
  })

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/visitormessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        form.reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div id='contact' >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <input
                    placeholder='Your Name'
                    className='input-class'
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input
                    placeholder='Your Email'
                    className='input-class'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='skill'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select your skill' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Frontend Developer'>Frontend Developer</SelectItem>
                      <SelectItem value='Backend Developer'>Backend Developer</SelectItem>
                      <SelectItem value='Fullstack Developer'>Fullstack Developer</SelectItem>
                      <SelectItem value='Designer'>Designer</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Your Message'
                    className='textarea-class'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='mt-4'>Send Message</Button>
        </form>
      </Form>
    </div>
  )
}

export default Contact