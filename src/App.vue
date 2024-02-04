<script setup lang="ts">
import ActivityCard from './components/ActivityCard.vue';
import Skill from './components/Skill.vue';
import AboutMe from './components/AboutMe.vue';
</script>

<template>
  <header class="pr-20 flex w-full justify-end relative h-full">
    <div class="sticky w-3/4 flex flex-col justify-between py-32 h-svh top-0">
      <div class="wrapper leading-6 gap-2 flex flex-col">
        <h1 class="text-6xl text-white/90 font-semibold capitalize">rodrigo <br />Casanova</h1>
        <p class="text-2xl text-sky-300 font-semibold">Student of Information Systems</p>
        <p class="text-lg">University of Minho</p>
      </div>
      <div class="flex gap-5">
        <a href="https://www.linkedin.com/in/casanovarodrigo/" target="_blank" class="hover:bg-transparent hover:before:border-b-2 relative hover:before:border-sky-300 before:absolute before:h-12 before:w-10 before:block before:content-[' '] before:border-sky-800 before:transition-all before:duration-300">
          <v-icon name="bi-linkedin" class="h-10 w-10 text-white duration-300 transition-all hover:text-white/70"></v-icon>
        </a>
        <a href="https://github.com/rodrigo0345/" target="_blank" class="hover:bg-transparent hover:before:border-b-2 relative hover:before:border-sky-300 before:absolute before:h-12 before:w-10 before:block before:content-[' '] before:border-sky-800 before:transition-all before:duration-300">
          <v-icon name="bi-github" class="h-10 w-10 text-white duration-300 transition-all hover:text-white/70"></v-icon>
        </a>
        <a href="mailto:rodrigocralha@gmail.com" target="_blank" class="hover:bg-transparent hover:before:border-b-2 relative hover:before:border-sky-300 before:absolute before:h-12 before:w-10 before:block before:content-[' '] before:border-sky-800 before:transition-all before:duration-300">
          <v-icon name="bi-mailbox" class="h-10 w-10 text-white duration-300 transition-all hover:text-white/70"></v-icon>
        </a>
      </div>
    </div>

  </header>

  <main class="relative flex flex-col max-w-[600px] flex-grow scroll scrollbar" >

    <AboutMe></AboutMe>

    <!-- Professional -->
    <h2 class="text-3xl text-white font-light mt-6 ml-36">Professional Experience</h2>
    <hr class="border-t-white/30 my-4 ml-36"/>
    <ActivityCard 
      title="EPIC Júnior" 
      date="2022 — Present" 
      description="EPIC Júnior is a Junior Enterprise that provides consulting services to companies and institutions. I am a member of the Projects Department, where I have the opportunity to work on real projects, develop my skills and learn from my colleagues."
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

    <h2 class="text-3xl text-white font-light mt-6 ml-36">Education</h2>
    <hr class="border-t-white/30 my-4 ml-36"/>
    <ActivityCard 
      title="Bachlor's Degree in Information Systems" 
      date="2021 — Present" 
      description="I'm currently studying <strong>Engineering and Management of Information Systems</strong> at the University of Minho. 
      <ul class='my-3'> 
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
    </ActivityCard>

    <!-- Side Projects -->
    <h2 class="text-3xl text-white font-light mt-6 ml-36">Side Projects</h2>
    <hr class="border-t-white/30 my-4 ml-36"/>
    <ActivityCard 
      title="Bachlor's Degree in Information Systems" 
      date="2021 — Present" 
      description="I'm currently studying <strong>Engineering and Management of Information Systems</strong> at the University of Minho. 
      <ul class='my-3'> 
        <li>Grade: 16/20</li>
      </ul>"
      :last=false 
      role="University of Minho"
    >
      <Skill skill="Java"></Skill>
      <Skill skill="Algorithms"></Skill>
      <Skill skill="Networks"></Skill>
      <Skill skill="Data Structures"></Skill>
      <Skill skill="Software Engineering"></Skill>
    </ActivityCard>
    
    <!-- Certifications -->
    <p>Certificates</p>
  </main>

  <div id="light-source" class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
</template>

<style scoped>
::-webkit-scrollbar-thumb {
  border-bottom-left-radius: 1em;
  border-top-left-radius: 1em;
  border-bottom-right-radius: 1em;
  border-top-right-radius: 1em;
}

</style>