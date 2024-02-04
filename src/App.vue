<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ActivityCard from './components/ActivityCard.vue';
import Skill from './components/Skill.vue';
import AboutMe from './components/AboutMe.vue';

const visits = ref(0);

onMounted(async () => {
  const response = await fetch('https://api.counterapi.dev/v1/casanovarodrigo/personal-portfolio-33444af1r/up');
  console.log(response)
  const data = await response.json();
  visits.value = data.count;
});

</script>

<template>
  <header class="pr-20 flex w-full md:justify-end pl-10 md:pl-0 relative h-full">
    <div class="sticky w-3/4 flex flex-col justify-between py-32 h-svh top-0">
      <div class="wrapper leading-6 gap-2 flex flex-col">
        <p class="text-white/80 p-0 m-0">Visited: {{ visits }} times</p>
        <h1 class="text-5xl text-white/90 font-bold capitalize">Rodrigo Casanova</h1>
        <p class="text-xl text-sky-300/90 font-semibold">Student of Information Systems</p>
        <p class="text-lg text-white/80">I like computers!</p>
      </div>
      <div class="flex gap-5">
        <a href="https://www.linkedin.com/in/casanovarodrigo/" target="_blank" class="hover:bg-transparent hover:before:border-b-2 relative hover:before:border-sky-300 before:absolute before:h-12 before:w-10 before:block before:content-[' '] before:border-sky-800 before:transition-all before:duration-300">
          <v-icon name="bi-linkedin" class="h-9 w-9 text-white duration-300 transition-all hover:text-white/70"></v-icon>
        </a>
        <a href="https://github.com/rodrigo0345/" target="_blank" class="hover:bg-transparent hover:before:border-b-2 relative hover:before:border-sky-300 before:absolute before:h-12 before:w-10 before:block before:content-[' '] before:border-sky-800 before:transition-all before:duration-300">
          <v-icon name="bi-github" class="h-9 w-9 text-white duration-300 transition-all hover:text-white/70"></v-icon>
        </a>
        <a href="mailto:rodrigocralha@gmail.com" target="_blank" class="hover:bg-transparent hover:before:border-b-2 relative hover:before:border-sky-300 before:absolute before:h-12 before:w-10 before:block before:content-[' '] before:border-sky-800 before:transition-all before:duration-300">
          <v-icon name="bi-mailbox" class="h-9 w-9 text-white duration-300 transition-all hover:text-white/70"></v-icon>
        </a>
      </div>
    </div>

  </header>
  
  <main class="group/card relative flex flex-col max-w-[600px] flex-grow scroll scrollbar pb-32" >
    
    <AboutMe></AboutMe>
    
    <!-- Professional -->
    <h2 class="text-3xl group-hover/card:opacity-50 duration-500 hover:!opacity-100 text-white font-light lg:mt-6 mt-10 ml-36">Professional Experience</h2>
    <hr class="border-t-white/30 my-4 ml-36"/>
    <ActivityCard 
      title="EPIC Júnior" 
      date="2022 — Present" 
      description="EPIC Júnior is a <strong>Junior Enterprise</strong> that provides consulting services to companies and institutions. I am a member of the Projects Department, where I have the opportunity to interact with real <strong>clients</strong> and to develop <strong>exciting new projects.</strong>"
      :last=false 
      role="Member of Projects Dept."
      link="https://epicje.pt/"
    >
      <Skill skill="Wordpress"></Skill>
      <Skill skill="Node.js"></Skill>
      <Skill skill="Redis"></Skill>
      <Skill skill="Nginx"></Skill>
      <Skill skill="PostgreSQL"></Skill>
    </ActivityCard>

    <h2 class="text-3xl group-hover/card:opacity-50 duration-500 hover:!opacity-100 text-white font-light lg:mt-6 mt-10 ml-36">Education</h2>
    <hr class="border-t-white/30 my-4 ml-36"/>
    <ActivityCard 
      title="Bachlor's Degree in Information Systems" 
      date="2021 — Present" 
      description="I'm currently studying <strong>Engineering and Management of Information Systems</strong> at the University of Minho, Portugal. I am expecting to end the course in <strong>june 2024</strong>
      <ul class='mt-3'> 
        <li>Grade: 16/20</li>
      </ul>"
      :last=false 
      role="University of Minho"
    >
      <Skill skill="Java"></Skill>
      <Skill skill="Javascript"></Skill>
      <Skill skill="CSS"></Skill>
      <Skill skill="Algorithms"></Skill>
      <Skill skill="Networks"></Skill>
      <Skill skill="Data Structures"></Skill>
      <Skill skill="Software Engineering"></Skill>
      <Skill skill="SAP"></Skill>
    </ActivityCard>

    <!-- Side Projects -->
    <h2 class="text-3xl group-hover/card:opacity-50 duration-500 hover:!opacity-100 text-white font-light lg:mt-6 mt-10 ml-36">Projects</h2>
    <hr class="border-t-white/30 my-4 ml-36"/>

    <!-- <ActivityCard 
      title="App for Managing University Events" 
      date="OCT 2023 — Present" 
      description="I am currently developing an application to <strong>manage events</strong>. I am responsible for <strong>documenting</strong>, <strong>testing</strong> and <strong>developing</strong> the backend of the application. This app is expected to support at least 300 concurrent users and is being made with <strong>EPIC Júnior</strong>."
      :last=false 
      role="Backend Developer"
    >
      <Skill skill="Node.js"></Skill>
      <Skill skill="Typescript"></Skill>
      <Skill skill="Redis"></Skill>
      <Skill skill="Queues"></Skill>
      <Skill skill="PWA"></Skill>
      <Skill skill="Unit Testing"></Skill>
    </ActivityCard> -->
    
    <!-- START POINT -->
    <ActivityCard 
      title="START POINT's Website" 
      date="SET — DEC 2023" 
      description="I was the <strong>Project Manager</strong> of this project. This website required some custom plugins to handle student verification and a custom theme to match the company's branding."
      :last=false 
      role="Wordpress Developer"
      link="https://startpoint.pt/"
    >
      <Skill skill="PHP"></Skill>
      <Skill skill="Management"></Skill>
      <Skill skill="Wordpress"></Skill>
    </ActivityCard>

    <ActivityCard 
      title="Volleyball Management App" 
      date="MAY — JUN 2023" 
      description="In this project I was responsible to develop a simple MVC using <strong>Java</strong> and <strong>MySQL</strong> to manage the Volleyball team's players, matches and trainings. This project was developed during my university course and involved a team of 11 people. I ended this course with the <strong>best grade</strong> of the class of 18/20."
      :last=false 
      role="Fullstack Developer"
      link="https://github.com/rodrigo0345/DAI-Projeto-Volley"
    >
      <Skill skill="Java"></Skill>
      <Skill skill="Typescript"></Skill>
      <Skill skill="Hilla"></Skill>
      <Skill skill="React"></Skill>
    </ActivityCard>

    <!-- Certifications -->
    <h2 class="text-3xl group-hover/card:opacity-50 duration-500 hover:!opacity-100 text-white font-light lg:mt-6 mt-10 ml-36">Certifications</h2>
    <hr class="border-t-white/30 my-4 ml-36"/>

    <ActivityCard 
      title="Foundational C#" 
      date="JAN 2024" 
      description="As I said in my introduction, I am focused on learning <strong>.NET</strong> and <strong>C#</strong> and this certification helped me <strong>getting started</strong> with the language."
      :last=false 
      role="FreeCodeCamp"
      link="https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/foundational-c-sharp-with-microsoft"
    >
      <Skill skill="C#"></Skill>
      <Skill skill="ASP.NET Core"></Skill>
    </ActivityCard>

    <ActivityCard 
      title="Cypher Fundamentals" 
      date="MAY 2024" 
      description="This was a very practical course on how to use <strong>Cypher</strong> to query and manipulate data in <strong>Neo4J</strong>. I learned a lot about <strong>graph databases</strong> and ended up having a really good grade on one my courses that required Neo4J knowledge."
      :last=false 
      role="Neo4J Graph Academy"
      link="https://graphacademy.neo4j.com/c/3aa65d3e-b8b8-4c9e-af48-63ed4b38c2bd/"
    >
      <Skill skill="Cypher"></Skill>
      <Skill skill="Neo4J"></Skill>
    </ActivityCard>

    <ActivityCard 
      title="Javascript Algorithms" 
      date="JUN 2024" 
      description="This course was an amazing first step into understanding dip down how Javascript works and how to use it to solve problems."
      :last=false 
      role="FreeCodeCamp"
      link="https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/javascript-algorithms-and-data-structures"
    >
      <Skill skill="Javascript"></Skill>
      <Skill skill="Problem Solving"></Skill>
    </ActivityCard>

  </main>

</template>