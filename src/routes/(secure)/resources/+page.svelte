<script lang="ts">
	import calculus_textbook from '$lib/assets/books/calculus_textbook.jpeg';
	import marketing_textbook from '$lib/assets/books/marketing_textbook.jpeg';
	import accounting_textbook from '$lib/assets/books/accounting_textbook.jpeg';
</script>

<main>
	<h1 class="text-center text-4xl font-medium pt-2">Learning Resource Center</h1>

	<!-- Textbook Resources -->
	<div class="bg-accent my-4 mx-6 rounded-xl h-fit">
		<div class="bg-lavender rounded-t-xl p-4">
			<h2 class="text-white text-xl font-medium tracking-wider">Textbooks</h2>
		</div>
		<div class="carousel carousel-center p-4 space-x-4 bg-accent rounded-b-xl">
			<div class="carousel-item h-64">
				<img src={marketing_textbook} alt="marketing textbook" class="rounded-box" />
			</div>
			<div class="carousel-item h-64">
				<img src={calculus_textbook} alt="calculus textbook" class="rounded-box" />
			</div>
			<div class="carousel-item h-64">
				<img src={accounting_textbook} alt="accounting textbook" class="rounded-box" />
			</div>
			<div class="carousel-item h-64">
				<img src={marketing_textbook} alt="marketing textbook" class="rounded-box" />
			</div>
			<div class="carousel-item h-64">
				<img src={calculus_textbook} alt="calculus textbook" class="rounded-box" />
			</div>
			<div class="carousel-item h-64">
				<img src={accounting_textbook} alt="accounting textbook" class="rounded-box" />
			</div>
		</div>
	</div>

	<!-- Quizzes -->
	<div class="bg-accent my-4 mx-6 rounded-xl h-fit">
		<div class="bg-lavender rounded-t-xl p-4">
			<h2 class="text-white text-xl font-medium tracking-wider">Quizzes</h2>
		</div>
		<div class="carousel carousel-center p-4 space-x-4 bg-accent rounded-b-xl">
			<div class="carousel-item w-52">
				<div class="card bg-neutral shadow-xl">
					<figure><img src={marketing_textbook} alt="Marketing Quizzes" /></figure>
					<div class="card-body">
						<h2 class="card-title text-white">Marketing Quizzes</h2>
						<p />
						<div class="card-actions justify-end">
							<button class="btn btn-primary text-white">View Quizzes</button>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-item w-52">
				<div class="card bg-neutral shadow-xl">
					<figure><img src={calculus_textbook} alt="Calculus Quizzes" /></figure>
					<div class="card-body">
						<h2 class="card-title text-white">Calculus Quizzes</h2>
						<p />
						<div class="card-actions justify-end">
							<button class="btn btn-primary text-white">View Quizzes</button>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-item w-52">
				<div class="card bg-neutral shadow-xl">
					<figure><img src={accounting_textbook} alt="Accounting Quizzes" /></figure>
					<div class="card-body">
						<h2 class="card-title text-white">Accounting Quizzes</h2>
						<p />
						<div class="card-actions justify-end">
							<button class="btn btn-primary text-white">View Quizzes</button>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-item w-52">
				<div class="card bg-neutral shadow-xl">
					<figure><img src={marketing_textbook} alt="Marketing Quizzes" /></figure>
					<div class="card-body">
						<h2 class="card-title text-white">Marketing Quizzes</h2>
						<p />
						<div class="card-actions justify-end">
							<button class="btn btn-primary text-white">View Quizzes</button>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-item w-52">
				<div class="card bg-neutral shadow-xl">
					<figure><img src={calculus_textbook} alt="Calculus Quizzes" /></figure>
					<div class="card-body">
						<h2 class="card-title text-white">Calculus Quizzes</h2>
						<p />
						<div class="card-actions justify-end">
							<button class="btn btn-primary text-white">View Quizzes</button>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-item w-52">
				<div class="card bg-neutral shadow-xl">
					<figure><img src={accounting_textbook} alt="Accounting Quizzes" /></figure>
					<div class="card-body">
						<h2 class="card-title text-white">Accounting Quizzes</h2>
						<p />
						<div class="card-actions justify-end">
							<button class="btn btn-primary text-white">View Quizzes</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
