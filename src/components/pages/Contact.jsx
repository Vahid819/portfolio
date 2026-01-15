'use client'
import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { VisitorSchema } from '@/schemas/visitorSchema'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { sendMessageWithWhatsApp } from '@/lib/messageService'

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
      const result = await sendMessageWithWhatsApp(data)
      if (result.success) {
        form.reset()
        alert('Message saved to database and sent to WhatsApp!')
      } else {
        alert('Error: ' + result.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form')
    }
  }

  return (
    <div id='contact' className='min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Left side - Contact Info */}
          <div className='flex flex-col justify-center'>
            <h2 className='text-4xl font-bold text-white mb-6'>Get In Touch</h2>
            <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out to me with any inquiries or collaboration ideas.
            </p>
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='text-blue-400 text-2xl'>✉️</div>
                <div>
                  <h3 className='text-white font-semibold mb-1'>Email</h3>
                  <p className='text-gray-400'>vahidmomin.dev@gmail.com</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='text-blue-400 text-2xl'>📍</div>
                <div>
                  <h3 className='text-white font-semibold mb-1'>Location</h3>
                  <p className='text-gray-400'>Kolhapur, Maharashtra, India</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='text-blue-400 text-2xl'>💼</div>
                <div>
                  <h3 className='text-white font-semibold mb-1'>Availability</h3>
                  <p className='text-gray-400'>Available for freelance & full-time roles</p>
                </div>
              </div>
            </div>
            {/* Social Media Links */}
            <div className='flex gap-6 mt-8'>
              <Link href='https://linkedin.com/in/yourprofile' target='_blank' className='text-white hover:text-[#0077b5] transform hover:scale-125 hover:-translate-y-2 transition duration-300 ease-in-out'>
                <FaLinkedin size={32} />
              </Link>
              <Link href='https://github.com/yourprofile' target='_blank' className='text-white hover:text-[#333333] transform hover:scale-125 hover:-translate-y-2 transition duration-300 ease-in-out'>
                <FaGithub size={32} />
              </Link>
              <Link href='https://twitter.com/yourprofile' target='_blank' className='text-white hover:text-[#1DA1F2] transform hover:scale-125 hover:-translate-y-2 transition duration-300 ease-in-out'>
                <FaTwitter size={32} />
              </Link>
              <Link href='https://instagram.com/yourprofile' target='_blank' className='text-white hover:text-[#E1306C] transform hover:scale-125 hover:-translate-y-2 transition duration-300 ease-in-out'>
                <FaInstagram size={32} />
              </Link>
              <Link href='https://wa.me/+918261040814' target='_blank' className='text-white hover:text-[#25D366] transform hover:scale-125 hover:-translate-y-2 transition duration-300 ease-in-out'>
                <FaWhatsapp size={32} />
              </Link>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-white'>Name</FormLabel>
                      <FormControl>
                        <input
                          placeholder='Your Name'
                          className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition'
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
                      <FormLabel className='text-white'>Email</FormLabel>
                      <FormControl>
                        <input
                          placeholder='Your Email'
                          className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition'
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
                      <FormLabel className='text-white'>Skill</FormLabel>
                      <FormControl>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className='w-full bg-slate-700 border-slate-600 text-white'>
                            <SelectValue placeholder='Select your skill' />
                          </SelectTrigger>
                          <SelectContent className='bg-slate-700 border-slate-600'>
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
                      <FormLabel className='text-white'>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Your Message'
                          className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition resize-none'
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition'>
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact