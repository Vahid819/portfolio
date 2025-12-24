import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function SigninPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT: framed visual (SVG + gradients, no external image) */}
          <div className="relative p-6 bg-linear-to-br from-[#0b1226] via-[#141728] to-[#0b0f1a] flex items-center justify-center">
            <div className="relative rounded-2xl border-8 border-white/90 overflow-hidden w-full max-w-[92%] h-[520px] md:h-[640px] shadow-lg">
              {/* decorative svg/gradients */}
              <div className="absolute inset-0">
                <div
                  className="absolute -left-16 -top-20 w-[560px] h-[560px] rounded-full opacity-60"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(255,120,80,0.18), transparent 40%), linear-gradient(180deg, rgba(10,10,20,0.6), transparent)",
                    filter: "blur(28px)",
                    transform: "rotate(-12deg)",
                  }}
                />
                <div
                  className="absolute right-[-12%] bottom-[-8%] w-[460px] h-[460px] rounded-full opacity-40"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(50,130,255,0.12), transparent 40%)",
                    filter: "blur(38px)",
                    transform: "translateX(8%)",
                  }}
                />

                <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0" stopColor="rgba(255,255,255,0.06)" />
                      <stop offset="1" stopColor="rgba(255,255,255,0.02)" />
                    </linearGradient>
                    <linearGradient id="mountainGrad" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="rgba(8,10,15,0.98)" />
                      <stop offset="1" stopColor="rgba(36,28,40,0.84)" />
                    </linearGradient>
                  </defs>

                  <rect width="100%" height="100%" fill="url(#g)" />
                  <g fill="white" opacity="0.9">
                    <circle cx="10%" cy="12%" r="1.2" />
                    <circle cx="20%" cy="28%" r="0.9" opacity="0.6" />
                    <circle cx="38%" cy="10%" r="0.8" opacity="0.6" />
                    <circle cx="72%" cy="30%" r="1.1" opacity="0.5" />
                    <circle cx="84%" cy="16%" r="0.7" opacity="0.5" />
                  </g>

                  <g transform="translate(60,200) scale(1.2)">
                    <circle cx="0" cy="0" r="80" fill="#0f1724" opacity="0.7" />
                    <path d="M-60 -10 C -40 -40, 40 -50, 60 -10 C 40 -30, -20 -20, -60 -10 Z" fill="rgba(255,160,120,0.12)" />
                    <path d="M-78 10 C -38 -20, 38 -28, 78 10 C 40 -2, -40 2, -78 10 Z" fill="rgba(255,240,220,0.02)" />
                  </g>

                  <path
                    d="M0,380 L40,320 L80,360 L140,300 L200,350 L260,310 L320,360 L400,310 L480,360 L560,320 L640,360 L720,300 L800,360 L800,520 L0,520 Z"
                    fill="url(#mountainGrad)"
                    transform="scale(0.9) translate(40, -80)"
                    opacity="0.95"
                  />
                </svg>
              </div>

              {/* small UI labels and avatar */}
              <div className="absolute top-4 left-6 text-white text-sm font-medium">Selected Works</div>

              <div className="absolute left-6 bottom-6 flex items-center gap-3 bg-black/40 px-3 py-2 rounded-full backdrop-blur-sm">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
                <div className="text-white text-sm">
                  <div className="font-semibold">Andrew.ui</div>
                  <div className="text-xs opacity-80">UI & Illustration</div>
                </div>
              </div>

              <div className="absolute right-6 bottom-6 flex items-center gap-2">
                <button aria-label="prev" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/90 hover:bg-white/20 transition">‹</button>
                <button aria-label="next" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/90 hover:bg-white/20 transition">›</button>
              </div>
            </div>
          </div>

          {/* RIGHT: form area */}
          <div className="flex items-center justify-center p-10 md:p-16 bg-white/95 dark:bg-card">
            <Card className="w-full max-w-md rounded-[28px] shadow-none border-white/10">
              <CardHeader />
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-semibold tracking-wide">UISOCIAL</div>
                  <div className="flex items-center gap-3">
                    <button className="text-sm px-3 py-1 rounded-md border border-gray-200">EN</button>
                    <ThemeToggle />
                  </div>
                </div>

                <div>
                  <h1 className="text-4xl font-extrabold mb-2">Hi Designer</h1>
                  <p className="text-sm text-muted mb-6">Welcome to UISOCIAL</p>

                  <form className="space-y-4">
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40" />
                    <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40" />

                    <div className="flex items-center justify-between text-sm text-muted">
                      <div />
                      <a href="#" className="text-sm text-primary hover:underline">Forgot password ?</a>
                    </div>

                    <div className="flex items-center gap-3 my-2">
                      <div className="flex-1 h-px bg-gray-200" />
                      <div className="text-xs text-muted">or</div>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 px-4 py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.6 20.4H42V20H24v8h11.3C34.6 33 30 36 24 36c-7 0-13-5.7-13-13s6-13 13-13c3.4 0 6.6 1.3 9 3.6l6.4-6.4C35.4 3.6 29.9 1.6 24 1.6 12.2 1.6 2.6 11.2 2.6 23S12.2 44.4 24 44.4 45.4 34.8 45.4 23c0-1.5-.2-3-.5-4.4z"/>
                        <path fill="#FF3D00" d="M6.3 14.1l6.6 4.8C14 15.8 18.7 13 24 13c3.4 0 6.6 1.3 9 3.6l6.4-6.4C35.4 3.6 29.9 1.6 24 1.6 15.5 1.6 8.1 6.8 6.3 14.1z"/>
                        <path fill="#4CAF50" d="M24 44.4c6 0 11.3-2.1 15.3-5.6l-7-5.8c-2.6 1.8-5.9 3-8.3 3-6 0-10.6-3-13-7.2l-6.6 5C6 39.3 14 44.4 24 44.4z"/>
                        <path fill="#1976D2" d="M43.6 20.4H42V20H24v8h11.3c-1.1 3.2-3.4 5.9-6.4 7.6l7 5.8C40 39.8 45.4 32.4 45.4 23c0-1.5-.2-3-.5-4.4z"/>
                      </svg>
                      Login with Google
                    </Button>

                    <Button type="submit" className="w-full mt-2 bg-red-500 text-white hover:bg-red-600">Login</Button>
                  </form>

                  <p className="text-center text-sm text-muted mt-4">
                    Don't have an account? <a href="#" className="text-primary font-medium">Sign up</a>
                  </p>

                  <div className="flex items-center justify-center gap-4 mt-6 text-muted">
                    <span className="text-sm"></span>
                    <span className="text-sm"></span>
                    <span className="text-sm"></span>
                    <span className="text-sm"></span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="justify-center pt-6">
                <span className="text-xs text-muted">© {new Date().getFullYear()} UISOCIAL</span>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}