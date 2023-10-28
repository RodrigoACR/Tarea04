<template>
	<div class="min-h-screen">
		<main>
			<section class="lg:px-[15%] px-[5%] pt-20">
				<h1 class="lg:text-6xl text-4xl text-center leading-normal font-bold rainbow-text pb-5">
					Imaginacion, animacion y magia
				</h1>
				<br />
			</section>
			<section class="lg:px-[15%] px-[5%] lg:pt-15 pt-10">
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
					<div class="px-7 py-5 rounded-lg border-2">
						<NuxtLink class="text-lg font-semibold rainbow-text" :to="'/pelicula'">Películas</NuxtLink>
					</div>
					<div class="px-7 py-5 rounded-lg border-2">
						<NuxtLink class="text-lg font-semibold rainbow-text" :to="'/estudio'">Estudios</NuxtLink>
					</div>
					<div class="px-7 py-5 rounded-lg border-2">
						<NuxtLink class="text-lg font-semibold rainbow-text" :to="'/director'">Directores</NuxtLink>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>

useHead({ title: "Castro's", });

</script>