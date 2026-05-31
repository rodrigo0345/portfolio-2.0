<script setup lang="ts">
import ActivityCard from "./components/ActivityCard.vue";
import Skill from "./components/Skill.vue";
import AboutMe from "./components/AboutMe.vue";
import ProjectCard from "./components/ProjectCard.vue";
import CertCard from "./components/CertCard.vue";
import ProjectModal from "./components/ProjectModal.vue";
import PlaneWorld from "./components/PlaneWorld.vue";
import GameWorld from "./components/GameWorld.vue";
import {
    Workflow,
    SquareKanban,
    Award,
    Container,
    Database,
    DatabaseZap,
    CirclePlay,
    AppWindow,
    MessageCircleMore,
    Contact,
    MailCheck,
    Github,
    Linkedin,
} from "lucide-vue-next";
import { ref } from "vue";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

const activeProject = ref<Project | null>(null);
const activeRect = ref<DOMRect | null>(null);

function openProject(project: Project, rect: DOMRect) {
    activeProject.value = project;
    activeRect.value = rect;
}
function closeProject() {
    activeProject.value = null;
    activeRect.value = null;
}

// Game world state
const gameActive = ref(false);
const gameSource = ref<DOMRect | null>(null);

function enterGame(rect: DOMRect) {
    gameSource.value = rect;
    gameActive.value = true;
}
function exitGame() {
    gameActive.value = false;
    gameSource.value = null;
}
</script>

<template>
    <!-- ─── TOP ZONE: two-column ─── -->
    <div id="top-zone">
        <!-- Left: sticky header + flyable world -->
        <header
            class="pr-16 flex w-full md:justify-end pl-10 md:pl-0 relative h-full"
        >
            <div
                class="sticky w-3/4 flex flex-col justify-between py-24 h-svh top-0"
            >
                <div class="flex flex-col gap-3">
                    <p
                        class="text-xs font-mono tracking-[0.22em] uppercase text-gold opacity-70"
                    >
                        Software Engineer
                    </p>
                    <h1
                        class="text-5xl font-grotesk font-bold text-frost leading-tight tracking-tight"
                    >
                        Rodrigo Casanova
                    </h1>
                    <p class="font-mono text-sm text-gold tracking-wide mt-1">
                        MSc Distributed Systems
                    </p>
                    <p
                        class="text-sm text-ash font-light leading-relaxed mt-2 max-w-[280px]"
                    >
                        Building distributed systems, database engines, and
                        embedded software.
                    </p>
                </div>

                <!-- Showcase canvas (floating F22) -->
                <div class="flex-1 w-full min-h-0 my-4 relative">
                    <PlaneWorld :paused="gameActive" @enter-game="enterGame" />
                    <div class="world-hint">
                        <span
                            class="font-mono text-xs tracking-widest uppercase"
                            >Press W to fly</span
                        >
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex gap-5">
                        <a
                            href="https://www.linkedin.com/in/casanovarodrigo/"
                            target="_blank"
                            class="social-link"
                            aria-label="LinkedIn"
                        >
                            <Linkedin stroke-width="1.5" class="h-5 w-5" />
                        </a>
                        <a
                            href="https://github.com/rodrigo0345/"
                            target="_blank"
                            class="social-link"
                            aria-label="GitHub"
                        >
                            <Github stroke-width="1.5" class="h-5 w-5" />
                        </a>
                        <a
                            href="mailto:rodrigocralha@gmail.com"
                            target="_blank"
                            class="social-link"
                            aria-label="Email"
                        >
                            <MailCheck stroke-width="1.5" class="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <!-- Right: About + Education + Experience -->
        <main
            class="group/card relative flex flex-col max-w-[620px] flex-grow pb-16 pt-0"
        >
            <AboutMe />

            <div class="section-heading-wrap ml-4 mt-10 mb-1">
                <h2 class="section-heading">Education</h2>
            </div>
            <div class="section-divider ml-4 mb-2"></div>

            <ActivityCard
                title="Master's Degree in Software Engineering"
                date="2024 — 2026"
                description="Studying at the <strong>University of Minho</strong>. Specializing in <strong>Distributed Systems</strong> and <strong>Intelligent Systems</strong>."
                :last="false"
                role="University of Minho"
            >
                <Skill skill="Distributed Systems" /><Skill
                    skill="Edge Computing"
                />
                <Skill skill="Go" /><Skill skill="Python" /><Skill
                    skill="Kubernetes"
                />
            </ActivityCard>

            <ActivityCard
                title="Bachelor's Degree in Information Systems"
                date="2021 — 2024"
                description="<strong>Engineering and Management of Information Systems</strong>, University of Minho. <ul class='mt-2'><li>Final Grade: <strong>16/20</strong></li></ul>"
                :last="false"
                role="University of Minho"
            >
                <Skill skill="Java" /><Skill skill="Javascript" />
                <Skill skill="Algorithms" /><Skill
                    skill="Software Engineering"
                />
            </ActivityCard>

            <div class="section-heading-wrap ml-4 mt-12 mb-1">
                <h2 class="section-heading">Experience</h2>
            </div>
            <div class="section-divider ml-4 mb-2"></div>

            <ActivityCard
                title="SMARTEX.ai"
                date="2025 — Present"
                description="Applied R&D in the embedded engineering team. Developed a PoC for <strong>on-device model compilation</strong> and engineered a custom backend for the <strong>NVIDIA Triton Inference Server</strong>."
                :last="false"
                role="Embedded Software Developer Intern"
                link="https://smartex.ai/"
            >
                <Skill skill="Modern C++ (C++23)" /><Skill
                    skill="NVIDIA Jetson"
                />
                <Skill skill="TensorRT" /><Skill skill="ONNX Runtime" />
            </ActivityCard>

            <ActivityCard
                title="INESC TEC"
                date="JUN — SEP 2025"
                description="Investigated a <strong>blind spot detection system</strong> for motorcycles using Camera-Radar sensor fusion. Engineered a synthetic data generation pipeline using the <strong>CARLA Simulator</strong>."
                :last="false"
                role="Summer Internship"
                link="https://www.inesctec.pt/"
            >
                <Skill skill="Python" /><Skill skill="Computer Vision" />
                <Skill skill="Sensor Fusion" /><Skill skill="CARLA" />
            </ActivityCard>

            <ActivityCard
                title="EPIC Júnior"
                date="2024 — Present"
                description="Leading planning and budgeting of innovative projects, <strong>managing a team of 31 people</strong>. Overseeing <strong>CI/CD pipelines</strong> and Git best practices."
                :last="false"
                role="Director of Innovation of Projects Dept."
                link="https://epicje.pt/"
            >
                <Skill skill="DevOps"><Workflow :size="13" /></Skill>
                <Skill skill="Docker"><Container :size="13" /></Skill>
                <Skill skill="Team Management"
                    ><SquareKanban :size="13"
                /></Skill>
                <Skill skill="Leadership"><Award :size="13" /></Skill>
            </ActivityCard>

            <ActivityCard
                title="EPIC Júnior"
                date="2022 — 2024"
                description="Member of the Projects Department, working with real <strong>clients</strong> on logistics management, appointment scheduling, and event gamification."
                :last="false"
                role="Member of Projects Dept."
                link="https://epicje.pt/"
            >
                <Skill skill="Node.js"><CirclePlay :size="13" /></Skill>
                <Skill skill="Redis"><DatabaseZap :size="13" /></Skill>
                <Skill skill="PostgreSQL"><Database :size="13" /></Skill>
            </ActivityCard>

            <ActivityCard
                title="AIS.SC UMINHO"
                date="OCT 2023 — 2024"
                description="Enhanced the website using WordPress and PHP to develop custom plugins."
                :last="false"
                role="Member of Technological Dept."
                link="https://aissc.dsi.uminho.pt/"
            >
                <Skill skill="Wordpress"><AppWindow :size="13" /></Skill>
                <Skill skill="PHP" />
            </ActivityCard>

            <ActivityCard
                title="NTT DATA Europe & Latam"
                date="2023 — 2024"
                description="Ambassador role broadening my network and deepening understanding of community outreach."
                :last="false"
                role="Ambassador"
                link="https://pt.nttdata.com/"
            >
                <Skill skill="Communication"
                    ><MessageCircleMore :size="13"
                /></Skill>
                <Skill skill="Network"><Contact :size="13" /></Skill>
            </ActivityCard>
        </main>
    </div>

    <!-- ─── BOTTOM ZONE: full-width grid ─── -->
    <div id="bottom-zone">
        <div class="section-heading-wrap mb-2">
            <h2 class="section-heading">Selected Projects</h2>
        </div>
        <div class="section-divider mb-6"></div>
        <div class="grid-section">
            <ProjectCard
                v-for="p in projects"
                :key="p.id"
                :project="p"
                @open="openProject"
            />
        </div>

        <div class="section-heading-wrap mt-16 mb-2">
            <h2 class="section-heading">Certifications</h2>
        </div>
        <div class="section-divider mb-6"></div>
        <div class="grid-section">
            <CertCard
                title="C++ Essentials 1"
                issuer="Cisco Networking Academy"
                date="DEC 2025"
                link="https://www.credly.com/badges/1c36ab10-d486-4f9d-b455-9d0668ea622f/linked_in_profile"
                :skills="['C++', 'Memory Management', 'OOP']"
            />
            <CertCard
                title="3D Graphics Programming from Scratch"
                issuer="pikuma.com"
                date="JUL 2024"
                link="https://courses.pikuma.com/certificates/4gjmahqcda"
                :skills="['C++', 'Graphics', 'Math']"
            />
            <CertCard
                title="Foundational C#"
                issuer="FreeCodeCamp"
                date="JAN 2024"
                link="https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/foundational-c-sharp-with-microsoft"
                :skills="['C#', 'ASP.NET Core']"
            />
            <CertCard
                title="Cypher Fundamentals"
                issuer="Neo4J Graph Academy"
                date="MAY 2023"
                link="https://graphacademy.neo4j.com/c/3aa65d3e-b8b8-4c9e-af48-63ed4b38c2bd/"
                :skills="['Cypher', 'Neo4J']"
            />
            <CertCard
                title="Javascript Algorithms & Data Structures"
                issuer="FreeCodeCamp"
                date="JUN 2023"
                link="https://www.freecodecamp.org/certification/fcc14e961b3-4818-4ae8-8255-d8cc731041f7/javascript-algorithms-and-data-structures"
                :skills="['Javascript', 'Problem Solving']"
            />
        </div>
    </div>

    <ProjectModal
        :project="activeProject"
        :source-rect="activeRect"
        @close="closeProject"
    />

    <!-- Fullscreen game world — mounts only when active -->
    <GameWorld
        v-if="gameActive && gameSource"
        :source-rect="gameSource"
        @exit="exitGame"
    />
</template>

<style scoped>
.section-heading {
    font-family: "Space Grotesk", system-ui, sans-serif;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #efcb68;
    opacity: 0.8;
}
.section-divider {
    height: 1px;
    background: rgba(239, 203, 104, 0.12);
}
.social-link {
    color: #aeb7b3;
    transition:
        color 0.2s,
        transform 0.2s;
    display: flex;
    align-items: center;
}
.social-link:hover {
    color: #efcb68;
    transform: translateY(-1px);
}

.world-hint {
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    color: #aeb7b3;
    opacity: 0.35;
    pointer-events: none;
    white-space: nowrap;
}
</style>
