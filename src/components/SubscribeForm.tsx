"use client";

import { useActionState, useId } from "react";
import { subscribeAction } from "@/app/actions";
import { motion } from "framer-motion";

const initialState = {
  success: false,
  message: "",
};

export default function SubscribeForm() {
  const [state, formAction, isPending] = useActionState(subscribeAction, initialState);
  const emailId = useId();
  const errorId = useId();

  return (
    <div className="max-w-lg mx-auto pt-10">
      <form action={formAction} className="space-y-6" aria-labelledby="form-title">
        <h3 id="form-title" className="sr-only">Newsletter Subscription</h3>
        <div className="relative group">
          <label htmlFor={emailId} className="sr-only">Your sanctuary email</label>
          <input 
            id={emailId}
            name="email"
            className={`w-full bg-transparent border-0 border-b-2 transition-all duration-700 text-center text-2xl font-serif py-6 px-0 focus:ring-0
              ${!state.success && state.message && !isPending ? 'border-red-400 focus:border-red-500 text-red-500' : 'border-outline-variant/30 focus:border-primary text-on-surface'}
              placeholder:text-outline-variant/50 disabled:opacity-50`} 
            placeholder="Your sanctuary email" 
            type="email"
            required
            aria-required="true"
            aria-invalid={!state.success && state.message ? "true" : "false"}
            aria-describedby={state.message ? errorId : undefined}
            disabled={isPending || state.success}
          />
        </div>
        
        {!state.success ? (
          <div className="space-y-6">
            <button 
              type="submit"
              disabled={isPending}
              aria-busy={isPending}
              className="btn-zen btn-primary w-full text-lg shadow-2xl shadow-primary/20 mt-8 disabled:opacity-70 flex items-center justify-center gap-3 transition-all active:scale-95"
            >
              {isPending ? (
                <span className="animate-pulse tracking-widest text-sm uppercase" aria-live="polite">Processing your commitment...</span>
              ) : (
                "Receive the Compass"
              )}
            </button>
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/40 text-center font-medium px-4">
              Your email is a sacred trust. It will never be shared, only inspired.
            </p>
            {state.message && !isPending && (
              <motion.p 
                id={errorId}
                role="alert"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs text-center font-medium tracking-wide uppercase"
              >
                {state.message}
              </motion.p>
            )}
          </div>
        ) : (
          <motion.div 
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 py-8"
          >
            <p className="text-primary font-serif italic text-2xl">
              {state.message}
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-on-surface-variant font-bold">
              Check your sanctuary inbox.
            </p>
          </motion.div>
        )}
      </form>
    </div>
  );
}
