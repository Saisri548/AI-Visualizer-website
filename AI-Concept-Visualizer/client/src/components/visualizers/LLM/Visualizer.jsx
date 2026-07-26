import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Canvas,
  Timeline,
  Controls,
  ExplanationPanel,
  IntroCard,
  Legend,
} from '../common';
import { LLM_INTRO, LLM_NODES, LLM_EDGES, LLM_LEGEND } from './data';
import { LLM_STEPS } from './steps';

/**
 * LLM Visualizer Component
 * 
 * Interactive visualization of how Large Language Models process text.
 * Shows the flow from input text through tokenization, embedding, attention,
 * and output layers to predict the next token.
 * 
 * Design: Dark theme with cyan/purple accents, smooth animations
 */
const LLMVisualizer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [isIntroExpanded, setIsIntroExpanded] = useState(true);
  const [nodes, setNodes] = useState(LLM_NODES);
  const [edges, setEdges] = useState(LLM_EDGES);

  // Auto-advance steps when playing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < LLM_STEPS.length - 1) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return prev;
        }
      });
    }, 2000 / speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  // Update node highlighting based on current step
  useEffect(() => {
    const step = LLM_STEPS[currentStep];
    if (!step) return;

    const updatedNodes = LLM_NODES.map((node) => ({
      ...node,
      data: {
        ...node.data,
        isActive: step.activeNodes.includes(node.id),
      },
    }));

    setNodes(updatedNodes);

    const updatedEdges = LLM_EDGES.map((edge) => ({
      ...edge,
      data: {
        ...edge.data,
        isHighlighted: step.highlightEdges.includes(edge.id),
      },
    }));

    setEdges(updatedEdges);
  }, [currentStep]);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleReset = useCallback(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, []);

  const handleStepClick = useCallback((stepIndex) => {
    setCurrentStep(stepIndex);
    setIsPlaying(false);
  }, []);

  const currentStepData = LLM_STEPS[currentStep];

  return (
    <div className="w-full h-full space-y-6 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
          Large Language Models
        </h1>
        <p className="text-slate-400">
          Explore how LLMs process text and generate predictions
        </p>
      </motion.div>

      {/* Intro Card */}
      {isIntroExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <IntroCard
            title={LLM_INTRO.title}
            description={LLM_INTRO.description}
            keyPoints={LLM_INTRO.keyPoints}
            icon={LLM_INTRO.icon}
            color={LLM_INTRO.color}
          />
        </motion.div>
      )}

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Canvas */}
        <div className="lg:col-span-2">
          <div className="h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-cyan-500/20 p-4">
            <Canvas
              nodes={nodes}
              edges={edges}
              showMiniMap={true}
              showControls={true}
            />
          </div>
        </div>

        {/* Right: Legend and Info */}
        <div className="space-y-4">
          <Legend items={LLM_LEGEND} columns={1} />
          
          {currentStepData && (
            <ExplanationPanel
              title={currentStepData.label}
              content={currentStepData.explanation}
              details={currentStepData.details}
              isExpanded={true}
              variant="default"
            />
          )}
        </div>
      </div>

      {/* Timeline */}
      <Timeline
        steps={LLM_STEPS}
        currentStep={currentStep}
        onStepClick={handleStepClick}
        isPlaying={isPlaying}
      />

      {/* Controls */}
      <Controls
        isPlaying={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
        onReset={handleReset}
        speed={speed}
        onSpeedChange={setSpeed}
      />
    </div>
  );
};

export default LLMVisualizer;
