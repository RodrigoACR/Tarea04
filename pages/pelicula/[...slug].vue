<template>
	<div>
		<main>
			<article class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%]">
				<ClientOnly>
					<div class="container">
						<div class="prose lg:prose-base prose-sm prose-slate pr-7 max-w-none" :value="page">
							<div>
								<h1
									class="lg:text-6xl text-4xl text-center leading-normal font-bold purplerainbow-text pb-5">
									{{ page.title }} </h1>
							</div>

							<div class="flex">
								<div class="w-1/4 p-2">
									<img :src="`https://cms-una.000webhostapp.com/storage/uploads${page.image.path}`"
										class="w-full rounded-xl">
									<div class="my-1">
										<NuxtLink :to="page.ver"
											class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
												viewBox="0 0 24 24" class="w-6 h-6 mr-2">
												<path fill="none" stroke="currentColor" stroke-linecap="round"
													stroke-width="1.5"
													d="M3 12v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M3 8V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968a2.998 2.998 0 0 1 0 5.294l-6.406 3.484" />
											</svg>
											<span>Ver</span>
										</NuxtLink>
									</div>
								</div>
								<div class="w-2/4 p-2">
									<h3 v-if="page.descripcion.informacion != null">Información</h3>
									<p> {{ page.descripcion.informacion }} </p>
									<h3 v-if="page.descripcion.sinopsis != null">Sinopsis</h3>
									<p> {{ page.descripcion.sinopsis }} </p>
									<h3 v-if="page.descripcion.premios != null">Premios</h3>
									<p> {{ page.descripcion.premios }} </p>
									<h3 v-if="page.descripcion.datosCuriosos != null">Datos Curiosos</h3>
									<p> {{ page.descripcion.datosCuriosos }} </p>
								</div>

								<div class="w-1/4 p-2">
									<table class="table-auto">
										<thead>
											<tr>
												<th colspan="2" class="bg-neutral-800 font-bold text-white text-center">
													Información</th>
											</tr>
										</thead>
										<tbody>
											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Titulo</th>
												<td>{{ page.title }}</td>
											</tr>
											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Estreno</th>
												<td>{{ formatDate(page.estreno) }}</td>
											</tr>
											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Duracion</th>
												<td>{{ page.duracion }}</td>
											</tr>
											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Genero</th>
												<td>{{ page.genero }}</td>
											</tr>

											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Direccion</th>
												<td>												
													<NuxtLink class="orangerainbow-text"
														:to="'/director/' + page.director1Id._id"> {{ page.director1 }}
													</NuxtLink>
													<br />
													<div>
														<NuxtLink v-if="page.director2Id" class="orangerainbow-text"
															:to="'/director/' + page.director2Id._id">
															{{ page.director2 }}
														</NuxtLink>
														<NuxtLink v-else-if="page.director2">
															{{ page.director2 }}
														</NuxtLink>
													</div>
													<div>
														<NuxtLink v-if="page.director3Id" class="orangerainbow-text"
															:to="'/director/' + page.director3Id._id">
															{{ page.director3 }}
														</NuxtLink>
														<NuxtLink v-else-if="page.director3">
															{{ page.director3 }}
														</NuxtLink>
													</div>
												</td>
											</tr>
											
											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Estudio</th>
												<td>
													<NuxtLink  v-if="page.estudio1Id" class="oceanrainbow-text"
														:to="'/estudio/' + page.estudio1Id._id"> {{ page.estudio1 }}
													</NuxtLink>
													<br />
													
													<div v-if="page.estudio2">
														<NuxtLink v-if="page.estudio2Id" class="purplerainbow-text"
															:to="'/estudio/' + page.estudio2Id._id">
															{{ page.estudio2 }}
														</NuxtLink>
														<NuxtLink v-else>
															{{ page.estudio2 }}
														</NuxtLink>
													</div>
													
												</td>
											</tr>
										</tbody>
									</table>
								</div>

							</div>
						</div>
						<br />
						<div class="text-center">
							<p>{{ page.author.name }}</p>
							<p>Ultima actualizacion del articulo: {{ formatDate(page.updatedAt) }}</p>
						</div>
					</div>
				</ClientOnly>
			</article>
		</main>
	</div>
</template>
  
<script setup>

const route = useRoute();
const { data: page, refresh } =
	await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Peliculas/${route.params.slug}`);
refresh();

useHead({
	title: `${page.value.title}`,
});
</script>

<script>
export default
	{
		methods:
		{
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('es', options)
			}
		}
	}
</script>