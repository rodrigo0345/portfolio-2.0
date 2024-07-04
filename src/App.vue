<script setup lang="ts">
import ActivityCard from "./components/ActivityCard.vue";
import Skill from "./components/Skill.vue";
import AboutMe from "./components/AboutMe.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {
  Workflow,
  SquareKanban,
  Award,
  Container,
  Database,
  DatabaseZap,
  Waypoints,
  CirclePlay,
  AppWindow,
  Slack,
  MessageCircleMore,
  Contact,
  MailCheck,
  Github,
  Linkedin,
} from "lucide-vue-next";

const zoomValue = ref(0.0);
let ball;
let velocity = new THREE.Vector3(0.05, 0.1, 0.05); // Initial velocity
const gravity = new THREE.Vector3(0, -0.002, 0); // Gravity

const bounceFactor = 0.7;

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const threeSection = document.getElementById("three-section");
  threeSection.appendChild(renderer.domElement);

  const setRendererSize = () => {
    const width = threeSection.clientWidth;
    const height = threeSection.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  setRendererSize();
  window.addEventListener("resize", setRendererSize);

  const geometry = new THREE.SphereGeometry(0.2, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x0ea5e9 });
  ball = new THREE.Mesh(geometry, material);
  scene.add(ball);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.000001);
  directionalLight.position.set(5, 10, 7.5);
  scene.add(directionalLight);

  camera.position.z = 2;

  const animate = () => {
    if (ball) {
      // Apply gravity
      velocity.add(gravity);

      // Update ball position
      ball.position.add(velocity);

      const friction = 1.0101;

      // Check for collision with the floor
      if (ball.position.y - 0.2 <= -1) {
        ball.position.y = -0.8;
        velocity.y = -velocity.y * bounceFactor;
      }

      // Check for collision with the walls
      if (ball.position.x + 0.2 >= 1 || ball.position.x - 0.2 <= -1) {
        velocity.x = -velocity.x;
      }

      // Check for collision with the ceiling
      if (ball.position.y + 0.2 >= 1) {
        velocity.y = -velocity.y;
      }

      // Check for collision with the front and back walls
      if (ball.position.z + 0.2 >= 1 || ball.position.z - 0.2 <= -1) {
        velocity.z = -velocity.z;
      }

      velocity.x /= friction;
      velocity.y /= friction;
      velocity.z /= friction;

      ball.color;
    }

    renderer.render(scene, camera);
  };

  renderer.setAnimationLoop(animate);

  const handleBallClick = () => {
    // Reset ball position and velocity
    ball.position.set(0, 0, 0);
    velocity.set(
      Math.random() * 0.2 - 0.1,
      Math.random() * 0.2,
      Math.random() * 0.2 - 0.1,
    );
  };

  window.addEventListener("scroll", () => {
    zoomValue.value = window.scrollY / window.innerHeight;
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", () => {
      zoomValue.value = window.scrollY / window.innerHeight;
    });
  });
});
</script>

<template>
  <header
    class="pr-20 flex w-full md:justify-end pl-10 md:pl-0 relative h-full"
  >
    <div class="sticky w-3/4 flex flex-col justify-between py-32 h-svh top-0">
      <div class="wrapper leading-6 gap-2 flex flex-col">
        <h1 class="text-5xl text-white/90 font-bold capitalize">
          Rodrigo Casanova
        </h1>
        <p class="text-xl text-sky-500 font-semibold">
          Degree in Information Systems
        </p>
      </div>
      <section
        id="three-section"
        class="z-50 flex-1 w-full max-h-max bg-transparent"
      ></section>
      <div class="flex gap-5">
        <a
          href="https://www.linkedin.com/in/casanovarodrigo/"
          target="_blank"
          class="hover:bg-transparent hover:before:border-b-2 relative hover:before:border-sky-300 before:absolute before:left-0 before:h-12 before:w-10 before:block before:content-[' '] before:border-sky-800 before:transition-all before:duration-300"
        >
          <Linkedin
            stroke-width="1"
            class="h-9 w-9 text-white duration-300 transition-all hover:text-white/70"
          />
        </a>
        <a
          href="https://github.com/rodrigo0345/"
          target="_blank"
          class="hover:bg-transparent hover:before:border-b-2 relative hover:before:border-sky-300 before:absolute before:left-0 before:h-12 before:w-10 before:block before:content-[' '] before:border-sky-800 before:transition-all before:duration-300"
        >
          <Github
            stroke-width="1"
            class="h-9 w-9 text-white duration-300 transition-all hover:text-white/70"
          />
        </a>
        <a
          href="mailto:rodrigocralha@gmail.com"
          target="_blank"
          class="hover:bg-transparent hover:before:border-b-2 relative hover:before:border-sky-300 before:absolute before:left-0 before:h-12 before:w-10 before:block before:content-[' '] before:border-sky-800 before:transition-all before:duration-300"
        >
          <MailCheck
            stroke-width="1"
            class="h-9 w-9 text-white duration-300 transition-all hover:text-white/70"
          />
        </a>
      </div>
    </div>
  </header>

  <main
    class="group/card relative flex flex-col max-w-[600px] flex-grow scroll scrollbar pb-32"
  >
    <AboutMe></AboutMe>

    <!-- Professional -->
    <h2
      class="text-3xl duration-500 hover:!opacity-100 text-white lg:mt-6 mt-10 ml-36 font-bold"
    >
      Professional Experience
    </h2>
    <hr class="border-t-white/30 my-4 ml-36" />

    <ActivityCard
      title="EPIC Júnior"
      date="2024 — Present"
      description="EPIC Júnior is a <strong>Junior Enterprise</strong> that provides consulting services to companies and institutions. With this new role I have the opportunity to take EPIC Júnior's team with real <strong>clients</strong> and to develop <strong>exciting new projects.</strong>"
      :last="false"
      role="Director of Innovation of Projects Dept."
      link="https://epicje.pt/"
    >
      <Skill skill="DevOps">
        <Workflow size="20" />
      </Skill>
      <Skill skill="Docker">
        <Container size="20" />
      </Skill>
      <Skill skill="Team Management">
        <SquareKanban size="20" />
      </Skill>
      <Skill skill="Leadership">
        <Award size="20" />
      </Skill>
    </ActivityCard>

    <ActivityCard
      title="EPIC Júnior"
      date="2022 — 2024"
      description="EPIC Júnior is a <strong>Junior Enterprise</strong> that provides consulting services to companies and institutions. I am a member of the Projects Department, where I have the opportunity to interact with real <strong>clients</strong> and to develop <strong>exciting new projects.</strong>"
      :last="false"
      role="Member of Projects Dept."
      link="https://epicje.pt/"
    >
      <Skill skill="Wordpress">
        <AppWindow size="20" />
      </Skill>
      <Skill skill="Node.js">
        <CirclePlay size="20" />
      </Skill>
      <Skill skill="Redis">
        <DatabaseZap size="20" />
      </Skill>
      <Skill skill="Nginx">
        <Waypoints size="20" />
      </Skill>
      <Skill skill="PostgreSQL">
        <Database size="20" />
      </Skill>
    </ActivityCard>
    <ActivityCard
      title="AIS.SC UMINHO"
      date="OCT 2023 — 2024"
      description="I'm a student core team member at AIS.SC, currently enhancing our website using
WordPress and PHP to develop some custom plugins. Additionally, I assist companies
during our course events."
      :last="false"
      role="Member of Technological Dept."
      link="https://aissc.dsi.uminho.pt/"
    >
      <Skill skill="Wordpress">
        <AppWindow size="20" />
      </Skill>
      <Skill skill="Team Work">
        <Slack size="20" />
      </Skill>
    </ActivityCard>
    <ActivityCard
      title="NTT DATA Europe & Latam"
      date="2023 — 2024"
      description="This experience broadened my network and also provided me with a deeper understanding of the importance of advocacy and community outreach"
      :last="false"
      role="Ambassador"
      link="https://pt.nttdata.com/"
    >
      <Skill skill="Communication">
        <MessageCircleMore size="20" />
      </Skill>
      <Skill skill="Network">
        <Contact size="20" />
      </Skill>
    </ActivityCard>

    <h2
      class="text-3xl duration-500 hover:!opacity-100 text-white lg:mt-6 mt-10 ml-36 font-bold"
    >
      Education
    </h2>
    <hr class="border-t-white/30 my-4 ml-36" />
    <ActivityCard
      title="Bachlor's Degree in Information Systems"
      date="2021 — Present"
      description="I'm currently studying <strong>Engineering and Management of Information Systems</strong> at the University of Minho, Portugal. I am expecting to end the course in <strong>june 2024</strong>
      <ul class='mt-3'>
        <li>Grade: 16/20</li>
      </ul>"
      :last="false"
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
    <h2
      class="text-3xl duration-500 hover:!opacity-100 text-white lg:mt-6 mt-10 ml-36 font-bold"
    >
      Projects
    </h2>
    <hr class="border-t-white/30 my-4 ml-36" />

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
      :last="false"
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
      description="I was responsible for developing a straightforward MVC system using Java and MySQL to manage players, matches, and training for the volleyball team. This project was undertaken as part of my university course, and it involved collaboration with a team of 11 people. I successfully completed this course with the highest grade in the class, achieving a score of 18/20."
      :last="false"
      role="Fullstack Developer"
      link="https://github.com/rodrigo0345/DAI-Projeto-Volley"
    >
      <Skill skill="Java"></Skill>
      <Skill skill="Typescript"></Skill>
      <Skill skill="Hilla"></Skill>
      <Skill skill="React"></Skill>
    </ActivityCard>

    <!-- Certifications -->
    <h2
      class="text-3xl duration-500 hover:!opacity-100 text-white lg:mt-6 mt-10 ml-36 font-bold"
    >
      Certifications
    </h2>
    <hr class="border-t-white/30 my-4 ml-36" />

    <ActivityCard
      title="Foundational C#"
      date="JAN 2024"
      description="As I said in my introduction, I am focused on learning <strong>.NET</strong> and <strong>C#</strong> and this certification helped me <strong>getting started</strong> with the language."
      :last="false"
      role="FreeCodeCamp"
      link="https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/foundational-c-sharp-with-microsoft"
    >
      <Skill skill="C#"></Skill>
      <Skill skill="ASP.NET Core"></Skill>
    </ActivityCard>

    <ActivityCard
      title="Cypher Fundamentals"
      date="MAY 2023"
      description="This was a very practical course on how to use <strong>Cypher</strong> to query and manipulate data in <strong>Neo4J</strong>. I learned a lot about <strong>graph databases</strong> and ended up having a really good grade on one my courses that required Neo4J knowledge."
      :last="false"
      role="Neo4J Graph Academy"
      link="https://graphacademy.neo4j.com/c/3aa65d3e-b8b8-4c9e-af48-63ed4b38c2bd/"
    >
      <Skill skill="Cypher"></Skill>
      <Skill skill="Neo4J"></Skill>
    </ActivityCard>

    <ActivityCard
      title="Javascript Algorithms"
      date="JUN 2023"
      description="This course was an amazing first step into understanding dip down how Javascript works and how to use it to solve problems."
      :last="false"
      role="FreeCodeCamp"
      link="https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/javascript-algorithms-and-data-structures"
    >
      <Skill skill="Javascript"></Skill>
      <Skill skill="Problem Solving"></Skill>
    </ActivityCard>
  </main>
</template>
