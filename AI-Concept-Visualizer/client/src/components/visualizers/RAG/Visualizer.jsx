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
import { RAG_INTRO, RAG_NODES, RAG_EDGES, RAG_LEGEND } from './data';
import { RAG_STEPS } from './steps';

/**
 * RAG Visualizer Component
 * 
 * Interactive visualization of Retrieval-Augmented Generation.
 * Shows how queries are embedded, documents are retrieved and ranked,
 * and how the LLM generates grounded responses using retrieved context.
 * 
 * Design: Dark theme with purple/cyan accents
 */
const RAGVisualizer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [isIntroExpanded, setIsIntroExpanded] = useState(true);
  const [nodes, setNodes] = useState(RAG_NODES);
  const [edges, setEdges] = useState(RAG_EDGES);

  // Auto-advance steps when playing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < RAG_STEPS.length - 1) {
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
    const step = RAG_STEPS[currentStep];
    if (!step) return;

    const updatedNodes = RAG_NODES.map((node) => ({
      ...node,
      data: {
        ...node.data,
        isActive: step.activeNodes.includes(node.id),
      },
    }));

    setNodes(updatedNodes);

    const updatedEdges = RAG_EDGES.map((edge) => ({
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

  const currentStepData = RAG_STEPS[currentStep];

  return (
    <div className="w-full h-full space-y-6 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
          Retrieval-Augmented Generation
        </h1>
        <p className="text-slate-400">
          Explore how RAG combines retrieval and generation for grounded answers
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
            title={RAG_INTRO.title}
            description={RAG_INTRO.description}
            keyPoints={RAG_INTRO.keyPoints}
            icon={RAG_INTRO.icon}
            color={RAG_INTRO.color}
          />
        </motion.div>
      )}

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Canvas */}
        <div className="lg:col-span-2">
          <div className="h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-purple-500/20 p-4">
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
          <Legend items={RAG_LEGEND} columns={1} />
          
          {currentStepData && (
            <ExplanationPanel
              title={currentStepData.label}
              content={currentStepData.explanation}
              details={currentStepData.details}
              isExpanded={true}
              variant="info"
            />
          )}
        </div>
      </div>

      {/* Timeline */}
      <Timeline
        steps={RAG_STEPS}
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

export default RAGVisualizer;
