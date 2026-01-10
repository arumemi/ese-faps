import React from 'react'
import {skills} from '../../data/skills'
import * as Icons from 'lucide-react';
import FadeIn from '../animation/FadeIn';

const Skills = () => {
    //Categorize skills 
    const skillCategories = {
        'Frontend': [
            skills.find(s => s.name === 'JavaScript'),
            skills.find(s => s.name === 'React.js'),
            skills.find(s => s.name === 'TypeScript'),
            skills.find(s => s.name === 'Next.js'),
            skills.find(s => s.name === 'HTML5'),
            skills.find(s => s.name === 'CSS3'),
            skills.find(s => s.name === 'Tailwind CSS'),
        ].filter(Boolean),
        'Backend & Database': [
            skills.find(s => s.name === 'Node.js'),
            skills.find(s => s.name === 'MongoDB'),
            skills.find(s => s.name === 'REST API'),
        ].filter(Boolean),
        'State Management': [
            skills.find(s => s.name === 'Redux'),
        ].filter(Boolean),
        'Tools & Platforms': [
            skills.find(s => s.name === 'Git & GitHub'),
            skills.find(s => s.name === 'Figma'),
            skills.find(s => s.name === 'Vite'),
        ].filter(Boolean),
        'Design ': [
            skills.find(s => s.name === 'Responsive Design'),
        ].filter(Boolean),
    }

  return (
    <div>
        <section id="skills" className="py-12 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl text-mono font-bold mb-8 text-center text-gray-800 dark:text-gray-200"> S K I L L S</h2>
            </div>
        </section>
    </div>
  )
}

export default Skills