<template>
	<div>
		<main>
			<article class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%]">
				<ClientOnly>
					<div class="container">
						<div class="prose lg:prose-base prose-sm prose-slate pr-7 max-w-none" :value="page">
							<div>
								<h1 class="lg:text-6xl text-4xl text-center leading-normal font-bold rainbow-text pb-5">
									{{ page.title }} </h1>
							</div>
							<div class="flex">
								<div class="w-1/4 p-2">
									<img :src="`https://cms-una.000webhostapp.com/storage/uploads${page.image.path}`"
										class="w-full rounded-xl">
								</div>
								<div class="w-2/4 p-2">
									<p>{{ page.descripcion }}</p>
									<div class="p-2 flex w-full">
										<div class="p-1">
											<h2 class="text-2xl text-left leading-normal font-bold pb-2">
												Peliculas
											</h2>
											<li v-for="pelicula1 in peliculas1" :key="pelicula1._id">
												<NuxtLink :to="`/pelicula/` + pelicula1._id" class="purplerainbow-text">
													{{ pelicula1.title }}
												</NuxtLink>
											</li>
											<li v-for="pelicula2 in peliculas2" :key="pelicula2._id">
												<NuxtLink :to="`/pelicula/` + pelicula2._id" class="orangerainbow-text">
													{{ pelicula2.title }}
												</NuxtLink>
											</li>
										</div>
									</div>
								</div>

								<div class="w-1/4 p-2">
									<table class="table-auto">
										<thead>
											<tr>
												<th colspan="2" class="bg-neutral-800 font-bold text-white text-center">
													Informacion</th>
											</tr>
										</thead>
										<tbody>
											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Titulo</th>
												<td>{{ page.title }}</td>
											</tr>
											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Fundacion</th>
												<td>{{ formatDate(page.fundacion) }}</td>
											</tr>
											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Fundador</th>
												<td>{{ page.fundador }}</td>
											</tr>
											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Pais</th>
												<td>{{ page.pais }}</td>
											</tr>
											<tr class="border-b dark:border-neutral-500">
												<th class="text-left pr-4">Pagina</th>
												<td>
													<NuxtLink class="rainbow-text" :to="page.pagina"> {{ page.title }}
													</NuxtLink>
												</td>
											</tr>
										</tbody>
									</table>
								</div>

							</div>
						</div>

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
const { data: page, refresh } = await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Estudio/${route.params.slug}`);
refresh();

const { data: peliculas1, refresh: rPelicula1 } =
	await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Peliculas?filter={"estudio1Id":"${route.params.slug}"}&fields={"title":true}`)
rPelicula1();
const { data: peliculas2, refresh: rPelicula2 } =
	await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Peliculas?filter={"estudio2Id":"${route.params.slug}"}&fields={"title":true}`)
rPelicula2();

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