<!--Footer container-->
<template>
    <footer class="bg-neutral-900 text-center text-white border rounded-md p-2">
        <template v-for="(n, i) in links" :key="`navLink-${i}`">
            <NuxtLink :to="n.link" class="inline-block nav-link hover:text-primary group">
                <div class="flex items-center space-x-2 p-2">
                    <Icon :icon="n.icon" class="w-4 h-4" />
                </div>
                <div
                    class="h-0.5 w-4/5 bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all">
                </div>
            </NuxtLink>
        </template>

        <div class="p-4 text-center" style="background-color: bg-neutral-900">
            © 2023 Castro's Company
        </div>
    </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const links =
    [
        {
            icon: "icomoon-free:blog",
            link: "/",
        },
        {
            icon: "entypo-social:facebook",
            link: "https://www.facebook.com/AlonsoCastro3?mibextid=ZbWKwL",
        },
        {
            icon: "entypo-social:instagram",
            link: "https://instagram.com/castrorojasrodrigo?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
        },
        {
            icon: "entypo-social:linkedin",
            link: "https://www.linkedin.com/in/rodrigo-alonso-castro-rojas-3857a6214",
        },
    ];
</script>