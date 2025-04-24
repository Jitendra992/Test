import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function BhaukaliSignin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full p-8">
        {/* 3D Model Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <div className="w-full h-[450px] bg-gradient-to-tr from-purple-900 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl border border-purple-600">
            <span className="text-white text-2xl font-black tracking-wide">3D Model Area</span>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-white text-4xl font-bold text-center tracking-tight">Welcome Back</h2>
              <p className="text-center text-gray-300">Enter your credentials to access your account</p>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="email" className="text-white text-sm">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="password" className="text-white text-sm">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
                </div>
                <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded-xl shadow-lg transition-all duration-300">
                  Sign In
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
