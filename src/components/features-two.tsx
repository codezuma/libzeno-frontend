import { Card } from '@/components/ui/card'
import { Building2, Calendar, CreditCard, Users, BarChart3, Bell } from 'lucide-react'

export default function Features() {
    return (
        <section id="features">
            <div className="bg-muted/50 py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground text-4xl font-semibold">Libzbook: Complete Library Management Solution</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">Everything you need to run a modern library — from book cataloging to member management, all in one intuitive platform designed for educational institutions.</p>
                    </div>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
                        <div className="space-y-4">
                            <Card className="aspect-video overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 border-purple-200/50 dark:border-purple-800/50">
                                <div className="flex h-full flex-col justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-lg bg-purple-500/20 p-2">
                                            <Building2 className="size-6 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <div className="text-sm font-medium text-purple-700 dark:text-purple-300">Multiple Locations</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            <div className="h-8 w-16 rounded bg-purple-500/20"></div>
                                            <div className="h-8 w-20 rounded bg-purple-500/30"></div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="h-8 w-20 rounded bg-purple-500/30"></div>
                                            <div className="h-8 w-16 rounded bg-purple-500/20"></div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">Book Cataloging & Inventory</h3>
                                <p className="text-muted-foreground my-4 text-lg">Organize your entire collection with ISBN lookup, categorization, and real-time inventory tracking.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Card className="aspect-video overflow-hidden bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 border-green-200/50 dark:border-green-800/50">
                                <div className="flex h-full flex-col justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-lg bg-green-500/20 p-2">
                                            <Calendar className="size-6 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div className="text-sm font-medium text-green-700 dark:text-green-300">Easy Booking</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Users className="size-4 text-green-600/50 dark:text-green-400/50" />
                                            <div className="h-2 flex-1 rounded-full bg-green-500/30"></div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1">
                                            {[...Array(14)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`h-6 rounded ${i % 3 === 0 ? 'bg-green-500/40' : 'bg-green-500/20'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">Member Management</h3>
                                <p className="text-muted-foreground my-4 text-lg">Manage students, faculty, and members with complete profiles, borrowing history, and access control.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Card className="aspect-video overflow-hidden bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 border-orange-200/50 dark:border-orange-800/50">
                                <div className="flex h-full flex-col justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-lg bg-orange-500/20 p-2">
                                            <CreditCard className="size-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <div className="text-sm font-medium text-orange-700 dark:text-orange-300">Auto Billing</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between rounded-lg bg-orange-500/20 p-2">
                                            <div className="text-xs font-medium text-orange-700 dark:text-orange-300">Monthly</div>
                                            <div className="text-xs font-bold text-orange-600 dark:text-orange-400">₹2,500</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="h-8 flex-1 rounded bg-orange-500/30"></div>
                                            <div className="h-8 flex-1 rounded bg-orange-500/20"></div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">Issue & Return Tracking</h3>
                                <p className="text-muted-foreground my-4 text-lg">Streamlined circulation desk operations with barcode scanning, due date tracking, and automated reminders.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Additional Features */}
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="mb-4 rounded-lg bg-blue-500/10 p-3 w-fit">
                                <BarChart3 className="size-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-foreground text-lg font-semibold mb-2">Fine Management</h3>
                            <p className="text-muted-foreground text-sm">Automated fine calculation for overdue books with flexible policies and payment tracking.</p>
                        </Card>
                        
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="mb-4 rounded-lg bg-pink-500/10 p-3 w-fit">
                                <Bell className="size-6 text-pink-600 dark:text-pink-400" />
                            </div>
                            <h3 className="text-foreground text-lg font-semibold mb-2">Reports & Analytics</h3>
                            <p className="text-muted-foreground text-sm">Comprehensive insights into circulation patterns, popular books, member activity, and collection utilization.</p>
                        </Card>
                        
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="mb-4 rounded-lg bg-teal-500/10 p-3 w-fit">
                                <Users className="size-6 text-teal-600 dark:text-teal-400" />
                            </div>
                            <h3 className="text-foreground text-lg font-semibold mb-2">Multi-User Access</h3>
                            <p className="text-muted-foreground text-sm">Role-based access control for librarians, administrators, and staff with secure permission management.</p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
