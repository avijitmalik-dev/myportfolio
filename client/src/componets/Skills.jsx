import React from 'react';

const frontend = ["Html", "Css", "JavaScript", "React.js", "Vue.js", "Tailwindcss"];
const backend = ["Node.js", "Express.js", "Python", "Django"];
const database = ["SQL", "MongoDB", "GIT", "JIRA", "REDUX"];

function Skills() {
  return (
    <div className='p-6 md:p-11 w-full flex flex-col gap-3 bg-slate-50 items-center justify-center'>
      <h1 className='uppercase font-bold text-3xl md:text-4xl font-serif space-x-1 pb-6 md:pb-10'>Skills</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {frontend.map((skill, index) => (
          <span key={index} className="bg-blue-100 p-2 rounded-md uppercase font-bold text-sm md:text-base">{skill}</span>
        ))}
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        {backend.map((skill, index) => (
          <span key={index} className='bg-blue-100 p-2 rounded-md uppercase font-bold text-sm md:text-base'>{skill}</span>
        ))}
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        {database.map((skill, index) => (
          <span key={index} className='bg-blue-100 p-2 rounded-md uppercase font-bold text-sm md:text-base'>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
