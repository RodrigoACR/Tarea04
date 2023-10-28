<template>
	<div class="min-h-screen">
		<main>
			<section class="lg:px-[15%] px-[5%] pt-20">
				<h1 class="lg:text-6xl text-4xl text-center leading-normal font-bold rainbow-text pb-5">
					Estudios de animacion
				</h1>
				<br />
				<p>
					“Son muchas las manos y los corazones que contribuyen al éxito de una persona” <br />
					Walt Disney 
				</p>
				<br />
			</section>
			<section class="lg:px-[15%] px-[5%] lg:pt-15 pt-10">
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
					<template v-for="data in pageNav" :key="data._id">
						<div class="px-7 py-5 rounded-lg border-2">
							<ul>
								<NuxtLink :to="`/estudio/` + data._id" class="text-lg font-semibold rainbow-text">
									{{ data.title }}
								</NuxtLink>
							</ul>
						</div>
					</template>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>

const { data: pageNav } = await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Estudio?fields={"title":true}`);

useHead({ title: "Estudios", });

</script>