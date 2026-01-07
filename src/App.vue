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
  const trailGeometry = new THREE.BufferGeometry();
  const positionAttribute = new THREE.Float32BufferAttribute(trailPositions, 3);
  trailGeometry.setAttribute("position", positionAttribute);

  const trailMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    blending: THREE.AdditiveBlending,
    opacity: 1.8,
  });

  const trail = new THREE.Line(trailGeometry, trailMaterial);
  scene.add(trail);

  // init positions
  for (let i = 0; i < trailLength; i++) {
    trailPositions[i * 3] = 0;
    trailPositions[i * 3 + 1] = 0;
    trailPositions[i * 3 + 2] = 0;
  }

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

  let wKeyPressed = false;

  // Event handlers
  const handleKeyDown = (event: any) => {
    if (event.key === "w" || event.key === "W") {
      wKeyPressed = true;
    }
  };

  const handleKeyUp = (event: any) => {
    if (event.key === "w" || event.key === "W") {
      wKeyPressed = false;
    }
  };

  // Add event listeners
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

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

  const animateWing1 = (deltaTime: number) => {
    const wing1Offset = new THREE.Vector3(-0.3, 0.0, 0.5); // Adjust as needed
    const rotatedWingPosition = wing1Offset
      .clone()
      .applyQuaternion(f22.quaternion);
    const wingPosition = f22.position.clone().add(rotatedWingPosition);

    // Shift trail positions down by one
    for (let i = trailLength - 1; i > 0; i--) {
      trailPositions[i * 3] = trailPositions[(i - 1) * 3];
      trailPositions[i * 3 + 1] = trailPositions[(i - 1) * 3 + 1];
      trailPositions[i * 3 + 2] = trailPositions[(i - 1) * 3 + 2];
    }

    // Set the first position to the wing's current position
    trailPositions[0] = wingPosition.x;
    trailPositions[1] = wingPosition.y;
    trailPositions[2] = wingPosition.z;

    // Notify Three.js that the position attribute needs to be updated
    positionAttribute.needsUpdate = true;
  };

  let previousTime = performance.now();

  const animate = () => {
    requestAnimationFrame(animate);
    const currentTime = performance.now();
    const deltaTime = (currentTime - previousTime) / 1000; // Convert to seconds
    previousTime = currentTime;

    if (f22) {
      // animateWing1(deltaTime); no time
      // Update trail geometry each frame to ensure visibility
      trailGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(trailPositions, 3)
      );

      const exhaustOffset = new THREE.Vector3(-0.5, 0.1, 0.5); // Position behind and slightly below the plane's center

      if (wKeyPressed) {
        // Ensure flames are visible
        flames.visible = true;

        // Update flame animation
        animateFlames(deltaTime);

        // Update flame geometry
        flameGeometry.attributes.position.needsUpdate = true;
      } else {
        // Hide flames when 'W' is not pressed
        flames.visible = false;
      }

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
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
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

    <h2
      class="text-3xl duration-500 hover:!opacity-100 text-white lg:mt-6 mt-10 ml-36 font-bold"
    >
      Education
    </h2>
    <hr class="border-t-white/30 my-4 ml-36" />
    <ActivityCard
      title="Master's Degree in Software Engineering"
      date="2024 — 2026"
      description="I am currently studying <strong>Software Engineering</strong> at the University of Minho. Specializing in <strong>Distributed Systems</strong> and <strong>Intelligent Systems</strong>."
      :last="false"
      role="University of Minho"
    >
      <Skill skill="Distributed Systems"></Skill>
      <Skill skill="Edge Computing"></Skill>
      <Skill skill="Go"></Skill>
      <Skill skill="Python"></Skill>
      <Skill skill="Kubernetes"></Skill>
    </ActivityCard>
    
    <ActivityCard
      title="Bachelor's Degree in Information Systems"
      date="2021 — 2024"
      description="I studied <strong>Engineering and Management of Information Systems</strong> at the University of Minho, Portugal. 
      <ul class='mt-3'>
        <li>Final Grade: <strong>16/20</strong></li>
      </ul>"
      :last="false"
      role="University of Minho"
    >
      <Skill skill="Java"></Skill>
      <Skill skill="Javascript"></Skill>
      <Skill skill="Algorithms"></Skill>
      <Skill skill="Software Engineering"></Skill>
    </ActivityCard>

    <h2
      class="text-3xl duration-500 hover:!opacity-100 text-white lg:mt-6 mt-10 ml-36 font-bold"
    >
      Professional Experience
    </h2>
    <hr class="border-t-white/30 my-4 ml-36" />

    <ActivityCard
      title="SMARTEX.ai"
      date="2025 — Present"
      description="Conducting applied R&D within the embedded engineering team. Developed a Proof-of-Concept for <strong>on-device model compilation</strong> and engineered a custom backend for the <strong>NVIDIA Triton Inference Server</strong>."
      :last="false"
      role="Embedded Software Developer Intern"
      link="https://smartex.ai/"
    >
      <Skill skill="Modern C++ (C++23)"></Skill>
      <Skill skill="NVIDIA Jetson"></Skill>
      <Skill skill="TensorRT"></Skill>
      <Skill skill="ONNX Runtime"></Skill>
    </ActivityCard>

    <ActivityCard
      title="INESC TEC"
      date="JUN — SEP 2025"
      description="Investigated a <strong>blind spot detection system</strong> for motorcycles using Camera-Radar sensor fusion. Engineered a synthetic data generation pipeline using the <strong>CARLA Simulator</strong>."
      :last="false"
      role="Summer Internship"
      link="https://www.inesctec.pt/"
    >
      <Skill skill="Python"></Skill>
      <Skill skill="Computer Vision"></Skill>
      <Skill skill="Sensor Fusion"></Skill>
      <Skill skill="CARLA"></Skill>
    </ActivityCard>

    <ActivityCard
      title="EPIC Júnior"
      date="2024 — Present"
      description="Leading the planning and budgeting of innovative ideas and <strong>managing a team of 31 people</strong>. Overseeing the development of <strong>CI/CD pipelines</strong> and implementing best practices using Git/GitHub."
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
      description="Member of the Projects Department, interacting with real <strong>clients</strong> and developing <strong>exciting new projects.</strong>"
      :last="false"
      role="Member of Projects Dept."
      link="https://epicje.pt/"
    >
      <Skill skill="Node.js">
        <CirclePlay :size="20" />
      </Skill>
      <Skill skill="Redis">
        <DatabaseZap :size="20" />
      </Skill>
      <Skill skill="PostgreSQL">
        <Database :size="20" />
      </Skill>
    </ActivityCard>

    <ActivityCard
      title="AIS.SC UMINHO"
      date="OCT 2023 — 2024"
      description="Student core team member. Enhanced the website using WordPress and PHP to develop custom plugins."
      :last="false"
      role="Member of Technological Dept."
      link="https://aissc.dsi.uminho.pt/"
    >
      <Skill skill="Wordpress">
        <AppWindow :size="20" />
      </Skill>
      <Skill skill="PHP"></Skill>
    </ActivityCard>

    <ActivityCard
      title="NTT DATA Europe & Latam"
      date="2023 — 2024"
      description="Ambassador role that broadened my network and provided a deeper understanding of community outreach."
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

    <h2
      class="text-3xl duration-500 hover:!opacity-100 text-white lg:mt-6 mt-10 ml-36 font-bold"
    >
      Selected Projects
    </h2>
    <hr class="border-t-white/30 my-4 ml-36" />

    <ActivityCard
      title="Video Streaming Platform"
      date="JAN 2025"
      description="Designed and implemented a video streaming platform using <strong>Go</strong>. The system handles concurrent streams and optimizes data packet transfer for real-time playback performance."
      :last="false"
      role="Systems Engineer"
      link="https://github.com/rodrigo0345/esr-tp2"
    >
      <Skill skill="Go"></Skill>
      <Skill skill="Networking"></Skill>
      <Skill skill="Streaming Protocols"></Skill>
    </ActivityCard>

    <ActivityCard
      title="VS Code DB Manager"
      date="Open Source"
      description="Contributed to the <strong>vscode-db-manager</strong> extension by implementing the <strong>SQLite</strong> driver. This feature allows users to connect to, query, and manage SQLite databases directly within VS Code. This project is meant to be a free alternative to already existing extensions."
      :last="false"
      role="Contributor"
      link="https://github.com/martimmpr/vscode-db-manager"
    >
      <Skill skill="TypeScript"></Skill>
      <Skill skill="SQLite"></Skill>
      <Skill skill="VS Code API"></Skill>
    </ActivityCard>

    <ActivityCard
      title="Raft Consensus - Fault Tolerance"
      date="APR — MAY 2025"
      description="Developed an implementation of the <strong>Raft consensus algorithm</strong> using the Maelstrom testing framework and <strong>Go</strong>. Analyzed resilience to Byzantine faults."
      :last="false"
      role="Systems Engineer"
      link="https://github.com/rodrigo0345/RaftSimple"
    >
      <Skill skill="Golang"></Skill>
      <Skill skill="Distributed Systems"></Skill>
      <Skill skill="Maelstrom"></Skill>
    </ActivityCard>

    <ActivityCard
      title="Smart Clinic"
      date="NOV 2024 — MAY 2025"
      description="Developed a virtual consultation platform using <strong>Strapi</strong> and <strong>Jitsi</strong>. Integrated seamless payments with IfThenPay to improve clinic accessibility."
      :last="false"
      role="Fullstack Developer"
    >
      <Skill skill="Strapi"></Skill>
      <Skill skill="Jitsi"></Skill>
      <Skill skill="React"></Skill>
      <Skill skill="IfThenPay"></Skill>
    </ActivityCard>

    <ActivityCard
      title="KeyBelle"
      date="OCT 2024 — APR 2025"
      description="Built a property key management system using <strong>.NET 8</strong> and <strong>PostgreSQL</strong> for a real estate agency. Improved operational efficiency and reduced key misplacement."
      :last="false"
      role="Backend Developer"
    >
      <Skill skill=".NET 8"></Skill>
      <Skill skill="C#"></Skill>
      <Skill skill="PostgreSQL"></Skill>
    </ActivityCard>

    <ActivityCard
      title="START POINT's Website"
      date="SEP — DEC 2023"
      description="I was the <strong>Project Manager</strong> of this project. Required custom plugins to handle student verification and a custom theme to match branding."
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
      description="Developed a MVC system using Java and MySQL to manage players and matches. Achieved the highest grade in the class (18/20)."
      :last="false"
      role="Fullstack Developer"
      link="https://github.com/rodrigo0345/DAI-Projeto-Volley"
    >
      <Skill skill="Java"></Skill>
      <Skill skill="Typescript"></Skill>
      <Skill skill="React"></Skill>
    </ActivityCard>

    <h2
      class="text-3xl duration-500 hover:!opacity-100 text-white lg:mt-6 mt-10 ml-36 font-bold"
    >
      Certifications
    </h2>
    <hr class="border-t-white/30 my-4 ml-36" />

    <ActivityCard
      title="C++ Essentials 1"
      date="DEC 2025"
      description="Professional certification covering the fundamental concepts of the <strong>C++ language</strong>, including data types, memory management, pointers, and object-oriented programming."
      :last="false"
      role="Cisco Networking Academy"
      link="https://www.credly.com/badges/1c36ab10-d486-4f9d-b455-9d0668ea622f/linked_in_profile"
    >
      <Skill skill="C++"></Skill>
      <Skill skill="Memory Management"></Skill>
      <Skill skill="OOP"></Skill>
    </ActivityCard>

    <ActivityCard
      title="3D Graphics Programming from Scratch"
      date="JUL 2024"
      description="Deep dive into 3D graphics concepts like backface culling, z-buffering, and shading techniques."
      :last="false"
      role="pikuma.com"
      link="https://courses.pikuma.com/certificates/4gjmahqcda"
    >
      <Skill skill="C++"></Skill>
      <Skill skill="Graphics"></Skill>
      <Skill skill="Math"></Skill>
    </ActivityCard>

    <ActivityCard
      title="Foundational C#"
      date="JAN 2024"
      description="Certification helping me get started with <strong>.NET</strong> and <strong>C#</strong>."
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
      description="Practical course on how to use <strong>Cypher</strong> to query and manipulate data in <strong>Neo4J</strong>."
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
      description="Course on understanding how Javascript works and how to use it to solve problems."
      :last="false"
      role="FreeCodeCamp"
      link="https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/javascript-algorithms-and-data-structures"
    >
      <Skill skill="Javascript"></Skill>
      <Skill skill="Problem Solving"></Skill>
    </ActivityCard>
  </main>
</template>
