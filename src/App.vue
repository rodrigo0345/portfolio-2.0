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
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import {
  BufferGeometry,
  Float32BufferAttribute,
  LineBasicMaterial,
  Line,
  PointsMaterial,
  Points,
  Vector3,
} from "three";

const zoomValue = ref(0.0);
let f22: any; // Variable to hold the F22 model
let mouseX = 0; // Mouse position X normalized
let mouseY = 0; // Mouse position Y normalized
let targetRotationX = 0; // Target rotation X (pitch)
let targetRotationY = 0; // Target rotation Y (yaw)

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 3; // Adjust camera closer for visibility

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const threeSection = document.getElementById("three-section");
  threeSection?.appendChild(renderer.domElement);

  const setRendererSize = () => {
    const width = threeSection?.clientWidth ?? 1;
    const height = threeSection?.clientHeight ?? 1;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  setRendererSize();
  window.addEventListener("resize", setRendererSize);

  // Set up lighting for better visibility
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Add soft ambient light
  scene.add(ambientLight);

  const textureLoader = new THREE.TextureLoader();
  const planeTexture = textureLoader.load("f22.png");

  // Load the F22 model
  const objLoader = new OBJLoader();
  objLoader.load(
    "f22.obj",
    (object) => {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: planeTexture,
          });
        }
      });
      f22 = object;
      f22.scale.set(0.4, 0.4, 0.4);
      f22.position.set(0, 0, 0);
      scene.add(f22);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log("An error happened", error);
    }
  );

  window.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  const trailLength = 100;
  const trailPositions = new Float32Array(trailLength * 3);
  const trailGeometry = new BufferGeometry();
  trailGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(trailPositions, 3)
  );
  const trailMaterial = new LineBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.8,
  });
  const trail = new Line(trailGeometry, trailMaterial);
  scene.add(trail);

  // Flame setup
  const flameMaterial = new THREE.PointsMaterial({
    vertexColors: true, // Allows each particle to have a unique color
    size: 0.09,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
    blending: THREE.AdditiveBlending, // Additive blending for a glowing effect
    polygonOffset: true,
  });
  const flameGeometry = new THREE.BufferGeometry();
  const flamePositions = new Float32Array(100 * 3); // 100 particles
  const flameSizes = new Float32Array(100); // Particle sizes
  const flameColors = new Float32Array(100 * 3); // Colors (R, G, B for each particle)
  const flameVelocities = new Float32Array(100 * 3); // Velocities for each particle
  const flameLifetimes = new Float32Array(100);

  // Set up initial flame particle positions, sizes, and colors
  for (let i = 0; i < 100; i++) {
    flamePositions[i * 3] = 0; // Start at the origin; positions will be updated each frame
    flamePositions[i * 3 + 1] = 0;
    flamePositions[i * 3 + 2] = 0;

    // Give each particle a slightly different size
    flameSizes[i] = 0.05 + Math.random() * 0.15; // Size range between 0.05 and 0.2

    // Set colors with a gradient from bright orange to lighter yellow
    flameColors[i * 3] = 0.3 + Math.random() * 0.4; // Red component
    flameColors[i * 3 + 1] = 0.1; // Green component
    flameColors[i * 3 + 2] = 0.1 + Math.random() * 0.4;

    flamePositions[i * 3] = 0;
    flamePositions[i * 3 + 1] = 0;
    flamePositions[i * 3 + 2] = 0;

    // Set initial velocities with random spread
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.4 + Math.random() * 1; // Adjust speed as desired

    flameVelocities[i * 3] = Math.cos(angle) * speed;
    flameVelocities[i * 3 + 1] = Math.sin(angle) * speed;
    flameVelocities[i * 3 + 2] = -speed; // Move backward along the z-axis

    // Set initial lifetimes
    flameLifetimes[i] = 1 + Math.random() * 2;
  }

  // Apply attributes to geometry
  flameGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(flamePositions, 3)
  );
  flameGeometry.setAttribute(
    "size",
    new THREE.Float32BufferAttribute(flameSizes, 1)
  );
  flameGeometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(flameColors, 3)
  );

  const flames = new THREE.Points(flameGeometry, flameMaterial);
  scene.add(flames);

  let turbulenceIntensity = 0.05;
  let turbulenceDelay = 100;
  let turbulenceCounter = 0;

  const animateFlames = (deltaTime: number) => {
    for (let i = 0; i < 100; i++) {
      // Update positions based on velocity
      flamePositions[i * 3] += flameVelocities[i * 3] * deltaTime;
      flamePositions[i * 3 + 1] += flameVelocities[i * 3 + 1] * deltaTime;
      flamePositions[i * 3 + 2] += flameVelocities[i * 3 + 2] * deltaTime;

      // Decrease lifetime
      flameLifetimes[i] -= deltaTime;

      // Reset particle if lifetime has expired
      if (flameLifetimes[i] <= 0) {
        // Reset position to the exhaust position relative to the plane
        const exhaustOffset = new THREE.Vector3(-0.5, 0.0, 0.0); // Adjust as needed
        const rotatedExhaustPosition = exhaustOffset
          .clone()
          .applyQuaternion(f22.quaternion);
        const exhaustPosition = f22.position
          .clone()
          .add(rotatedExhaustPosition);

        flamePositions[i * 3] = exhaustPosition.x;
        flamePositions[i * 3 + 1] = exhaustPosition.y;
        flamePositions[i * 3 + 2] = exhaustPosition.z;

        // Reset velocity with random spread
        const forwardVector = new THREE.Vector3(-0.1, 0, 0).applyQuaternion(
          f22.quaternion
        );
        const spreadAngle = 0.2; // Adjust spread as desired
        const randomAxis = new THREE.Vector3(
          Math.random(),
          Math.random(),
          Math.random()
        ).normalize();
        const randomAngle = (Math.random() - 0.4) * spreadAngle;
        const quaternion = new THREE.Quaternion().setFromAxisAngle(
          randomAxis,
          randomAngle
        );
        const velocityVector = forwardVector
          .clone()
          .applyQuaternion(quaternion);
        const speed = 1 + Math.random() * 2; // Adjust speed as desired

        flameVelocities[i * 3] = velocityVector.x * speed;
        flameVelocities[i * 3 + 1] = velocityVector.y * speed;
        flameVelocities[i * 3 + 2] = velocityVector.z * speed;

        // Reset lifetime
        flameLifetimes[i] = 1 + Math.random() * 2; // Lifetime between 1 and 3 seconds
      }

      // Optional: Update colors or opacity based on lifetime for fade-out effect
      // Example: flameColors[i * 3 + 3] = flameLifetimes[i] / maxLifetime; // Adjust opacity
    }

    // Update flame geometry to apply changes each frame
    flameGeometry.attributes.position.needsUpdate = true;
    // If you updated colors or opacity:
    flameGeometry.attributes.color.needsUpdate = true;
  };

  let previousTime = performance.now();

  const animate = () => {
    requestAnimationFrame(animate);
    const currentTime = performance.now();
    const deltaTime = (currentTime - previousTime) / 1000; // Convert to seconds
    previousTime = currentTime;

    if (f22) {
      for (let i = trailLength - 1; i > 0; i--) {
        trailPositions[i * 3] = trailPositions[(i - 1) * 3];
        trailPositions[i * 3 + 1] = trailPositions[(i - 1) * 3 + 1];
        trailPositions[i * 3 + 2] = trailPositions[(i - 1) * 3 + 2];
      }
      trailPositions[0] = f22.position.x;
      trailPositions[1] = f22.position.y;
      trailPositions[2] = f22.position.z;

      // Update trail geometry each frame to ensure visibility
      trailGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(trailPositions, 3)
      );

      const exhaustOffset = new THREE.Vector3(-0.5, 0.1, 0.5); // Position behind and slightly below the plane's center

      for (let i = 0; i < 100; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 0.05;

        // Generate small random offsets around the exhaust area
        const flameOffset = new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius - 0.1, // Small y-offset for variation
          -0.5 // Place behind the plane's initial exhaust
        );

        // Clone the exhaust offset and rotate it by the plane's rotation
        const rotatedExhaustPosition = exhaustOffset.clone().add(flameOffset);
        rotatedExhaustPosition.applyQuaternion(f22.quaternion); // Apply the plane's rotation

        // Position flames at the rotated exhaust position relative to the plane's current position

        animateFlames(deltaTime);
      }

      // Update flame geometry each frame to ensure visibility
      flameGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(flamePositions, 3)
      );

      // Turbulence effect
      turbulenceCounter++;
      if (turbulenceCounter >= turbulenceDelay) {
        turbulenceCounter = 0;
        const turbulenceX = (Math.random() - 0.5) * turbulenceIntensity;
        const turbulenceY = (Math.random() - 0.5) * turbulenceIntensity;

        targetRotationX += turbulenceX;
        targetRotationY += turbulenceY;
      }

      // Mouse interaction
      const mouseInfluence = 1.2;
      const desiredRotationX = mouseY * mouseInfluence;
      const desiredRotationY = mouseX * mouseInfluence;

      targetRotationX += (desiredRotationX - targetRotationX) * 0.05;
      targetRotationY += (desiredRotationY - targetRotationY) * 0.05;

      const maxRotation = Math.PI / 8;
      targetRotationX = THREE.MathUtils.clamp(
        targetRotationX,
        -maxRotation,
        maxRotation
      );
      targetRotationY = THREE.MathUtils.clamp(
        targetRotationY,
        -maxRotation,
        maxRotation
      );

      const rotationSmoothness = 0.05;
      f22.rotation.x += (targetRotationX - f22.rotation.x) * rotationSmoothness;
      f22.rotation.y += (targetRotationY - f22.rotation.y) * rotationSmoothness;

      // Camera follow
      const offset = new THREE.Vector3(0, 1.5, 1.5);
      const cameraPosition = f22.position.clone().add(offset);
      camera.position.lerp(cameraPosition, 0.1);
      camera.lookAt(f22.position);
    }

    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener("scroll", () => {
    zoomValue.value = window.scrollY / window.innerHeight;
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", () => {
      zoomValue.value = window.scrollY / window.innerHeight;
    });
    window.removeEventListener("mousemove", () => {});
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
          Master's Student in Software Engineering
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

    <!-- Education -->
    <h2
      class="text-3xl duration-500 hover:!opacity-100 text-white lg:mt-6 mt-10 ml-36 font-bold"
    >
      Education
    </h2>
    <hr class="border-t-white/30 my-4 ml-36" />
    <ActivityCard
      title="Master's Degree in Software Engineering"
      date="2024 — Present"
      description="I am currently studying <strong>Software Engineering</strong> at the University of Minho, Portugal. I expect to end my master's degree in 2026."
      :last="false"
      role="University of Minho"
    >
      <Skill skill="Go"></Skill>
      <Skill skill="Python"></Skill>
      <Skill skill="Computer Arquitectures"></Skill>
      <Skill skill="Kubernetes"></Skill>
      <Skill skill="Networks"></Skill>
      <Skill skill="Machine Learning"></Skill>
    </ActivityCard>
    <ActivityCard
      title="Bachlor's Degree in Information Systems"
      date="2021 — 2024"
      description="I studied <strong>Engineering and Management of Information Systems</strong> at the University of Minho, Portugal. 
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
      description="EPIC Júnior is a <strong>Junior Enterprise</strong> that provides consulting services to companies and institutions. This challenging role represents a unique opportunity to contribute innovative ideas and drive the development of significant projects within EPIC Júnior, always upholding the quality and excellence of our work."
      :last="false"
      role="Director of Innovation of Projects Dept."
      link="https://epicje.pt/"
    >
      <Skill skill="DevOps">
        <Workflow :size="20" />
      </Skill>
      <Skill skill="Docker">
        <Container :size="20" />
      </Skill>
      <Skill skill="Team Management">
        <SquareKanban :size="20" />
      </Skill>
      <Skill skill="Leadership">
        <Award :size="20" />
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
        <AppWindow :size="20" />
      </Skill>
      <Skill skill="Node.js">
        <CirclePlay :size="20" />
      </Skill>
      <Skill skill="Redis">
        <DatabaseZap :size="20" />
      </Skill>
      <Skill skill="Nginx">
        <Waypoints :size="20" />
      </Skill>
      <Skill skill="PostgreSQL">
        <Database :size="20" />
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
        <AppWindow :size="20" />
      </Skill>
      <Skill skill="Team Work">
        <Slack :size="20" />
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
        <MessageCircleMore :size="20" />
      </Skill>
      <Skill skill="Network">
        <Contact :size="20" />
      </Skill>
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
      title="3D Graphics Programming from Scratch"
      date="JUL 2024"
      description="I took this course out of genuine curiosity and I found it to be one of the most interesting courses I have ever taken. I learned a lot about <strong>3D graphics</strong> and how to create <strong>3D models</strong> from scratch. I learned concepts as backface culling, z-buffering, simple shading technics, etc..."
      :last="false"
      role="pikuma.com"
      link="https://courses.pikuma.com/certificates/4gjmahqcda"
    >
      <Skill skill="Graphics"></Skill>
      <Skill skill="Math"></Skill>
    </ActivityCard>

    <ActivityCard
      title="Foundational C#"
      date="JAN 2024"
      description="I am focused on learning <strong>.NET</strong> and <strong>C#</strong> and this certification helped me <strong>getting started</strong> with the language."
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
