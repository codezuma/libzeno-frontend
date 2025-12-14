'use client'

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function ContactForm() {
    return (
        <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="43815660-7ad4-4c17-b685-4a29e669731a"/>
            <Card className="p-8 sm:p-12">
                <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground mt-4 mb-8 text-sm">
                    Fill out the form below and we'll get back to you as soon as possible.
                </p>
                

                <div className="space-y-6">
                    <div>
                        <Label
                            htmlFor="contact-name"
                            className="mb-2 block">
                            Name
                        </Label>
                        <Input
                            type="text"
                            id="contact-name"
                            name="name"
                            placeholder="Your full name"
                            required
                        />
                    </div>
                    <div>
                        <Label
                            htmlFor="contact-phone"
                            className="mb-2 block">
                            Contact
                        </Label>
                        <Input
                            type="tel"
                            id="contact-phone"
                            name="contact"
                            placeholder="Your phone number or email"
                            required
                        />
                    </div>
                    <div>
                        <Label
                            htmlFor="contact-message"
                            className="mb-2 block">
                            Message
                        </Label>
                        <Textarea
                            id="contact-message"
                            name="message"
                            rows={5}
                            placeholder="Your message..."
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full sm:w-auto">
                        Send Message
                    </Button>
                </div>
            </Card>
        </form>
    )
}
