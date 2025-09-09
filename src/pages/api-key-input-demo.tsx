import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Key, CheckCircle, XCircle, Clock } from "lucide-react";
import { ApiKeyInput } from "@/components/halo";
import { HaloCard, HaloButton, HaloBadge } from "@/components/halo";

export default function ApiKeyInputDemoPage() {
  const [openAiKey, setOpenAiKey] = useState("");
  const [anthropicKey, setAnthropicKey] = useState("");
  const [customKey, setCustomKey] = useState("");
  const [validationResults, setValidationResults] = useState<Record<string, string>>({});

  // Mock validation functions for different providers
  const validateOpenAI = async (key: string): Promise<boolean> => {
    // Simulate API validation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    return key.startsWith("sk-") && key.length > 20;
  };

  const validateAnthropic = async (key: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1200));
    return key.startsWith("sk-ant-") && key.length > 30;
  };

  const validateGeneric = (key: string): boolean => {
    return key.length >= 8;
  };

  // Mock persistence handler
  const handlePersist = async (providerId: string, value: string) => {
    console.log(`Persisting ${providerId} key: ${value.slice(0, 8)}...`);
    setValidationResults(prev => ({
      ...prev,
      [providerId]: "✅ Securely saved"
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30">
              <Shield className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent">
              ApiKeyInput
            </h1>
          </div>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Secure API key management with masking, validation, and encrypted storage
          </p>
        </motion.div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* OpenAI Integration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <HaloCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <Key className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">OpenAI Integration</h3>
                  <p className="text-sm text-neutral-400">Advanced validation with async verification</p>
                </div>
              </div>

              <ApiKeyInput
                label="OpenAI API Key"
                value={openAiKey}
                onChange={setOpenAiKey}
                providerId="openai"
                placeholder="sk-..."
                helperText="Your key will be validated against OpenAI's format requirements"
                onValidate={validateOpenAI}
                onPersist={handlePersist}
                validationMessage={
                  openAiKey && !openAiKey.startsWith("sk-") 
                    ? "OpenAI keys must start with 'sk-'" 
                    : undefined
                }
                required
              />

              {validationResults.openai && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4"
                >
                  <HaloBadge variant="success" className="text-xs">
                    {validationResults.openai}
                  </HaloBadge>
                </motion.div>
              )}
            </HaloCard>
          </motion.div>

          {/* Anthropic Integration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HaloCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Lock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Anthropic Claude</h3>
                  <p className="text-sm text-neutral-400">Enterprise-grade security validation</p>
                </div>
              </div>

              <ApiKeyInput
                label="Anthropic API Key"
                value={anthropicKey}
                onChange={setAnthropicKey}
                providerId="anthropic"
                variant="elevated"
                placeholder="sk-ant-..."
                helperText="Anthropic keys require extended validation"
                onValidate={validateAnthropic}
                onPersist={handlePersist}
                validationMessage={
                  anthropicKey && !anthropicKey.startsWith("sk-ant-") 
                    ? "Anthropic keys must start with 'sk-ant-'" 
                    : undefined
                }
              />

              {validationResults.anthropic && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4"
                >
                  <HaloBadge variant="success" className="text-xs">
                    {validationResults.anthropic}
                  </HaloBadge>
                </motion.div>
              )}
            </HaloCard>
          </motion.div>

          {/* Custom Provider */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <HaloCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Eye className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Custom Provider</h3>
                  <p className="text-sm text-neutral-400">Minimal validation with immediate feedback</p>
                </div>
              </div>

              <ApiKeyInput
                label="Custom API Key"
                value={customKey}
                onChange={setCustomKey}
                providerId="custom"
                variant="minimal"
                size="lg"
                placeholder="Enter any API key..."
                helperText="This demo uses simple length validation for immediate feedback"
                onValidate={validateGeneric}
                validationState={
                  customKey.length === 0 ? null :
                  customKey.length < 8 ? "invalid" :
                  "valid"
                }
                validationMessage={
                  customKey.length === 0 ? undefined :
                  customKey.length < 8 ? "Key must be at least 8 characters" :
                  "Valid key format"
                }
              />
            </HaloCard>
          </motion.div>
        </div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <HaloCard className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Security Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Masked Display</h4>
                <p className="text-sm text-neutral-400">Keys are masked by default with reveal toggle</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Paste Detection</h4>
                <p className="text-sm text-neutral-400">Automatic detection and validation on paste</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Async Validation</h4>
                <p className="text-sm text-neutral-400">Real-time validation with loading states</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Secure Storage</h4>
                <p className="text-sm text-neutral-400">Optional encrypted persistence to Supabase</p>
              </div>
            </div>
          </HaloCard>
        </motion.div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <HaloCard className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Usage Examples</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-emerald-400 mb-3">Basic Usage</h4>
                <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
                  <pre>{`<ApiKeyInput
  label="API Key"
  value={apiKey}
  onChange={setApiKey}
  providerId="openai"
  placeholder="sk-..."
  required
/>`}</pre>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-blue-400 mb-3">With Validation</h4>
                <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
                  <pre>{`<ApiKeyInput
  label="API Key"
  value={apiKey}
  onChange={setApiKey}
  providerId="anthropic"
  onValidate={async (key) => {
    // Your validation logic
    return key.startsWith('sk-ant-');
  }}
  validationMessage="Invalid key format"
/>`}</pre>
                </div>
              </div>
            </div>
          </HaloCard>
        </motion.div>
      </div>
    </div>
  );
}