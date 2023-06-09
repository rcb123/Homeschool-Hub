import type { Database } from '$lib/database.types';
import type { AuthSession, SupabaseClient, User } from '@supabase/supabase-js';
import type {
	Course,
	Lesson,
	Assignment,
	Resource,
	Category,
	Channel,
	Message
} from '$root/db/datamodels';
import { get, writable, type Writable } from 'svelte/store';

// Course store
export const courses: Writable<Course[]> = writable([]);

// Selected course store
export const selectedCourse: Writable<Course> = writable();

// Course Students Store
export const courseStudents: Writable<{ course: Course; students: User[] }[]> = writable([]);

// Lessons store
export const lessons: Writable<Lesson[]> = writable([]);

// Assignments store (all assignments across all stores)
export const assignments: Writable<Assignment[]> = writable([]);

// Resources store
export const resources: Writable<Resource[]> = writable([]);

// Categories store
export const categories: Writable<Category[]> = writable([]);

// Channels store
export const channels: Writable<Channel[]> = writable([]);

// Messages store
export const messages: Writable<Message[]> = writable([]);

export default {
	courses: {
		getAll: async (
			supabase: SupabaseClient<Database, 'public', never>,
			session: AuthSession | null
		) => {
			if (session) {
				const user_id = session.user.id;
				// Retrieve course ids for courses the user is enrolled in
				const enrollmentsRes = await supabase
					.from('enrollments')
					.select('course_id')
					.eq('student_id', user_id);

				if (enrollmentsRes.error) {
					console.log(enrollmentsRes.error);
					courses.set([]);
					return;
				}

				const courseIds = enrollmentsRes.data?.map((enrollment) => enrollment.course_id);

				// Retrieve only the courses that match the course ids
				const coursesRes = await supabase.from('courses').select('*').in('id', courseIds);

				if (coursesRes.error) {
					console.log(coursesRes.error);
					courses.set([]);
					return;
				}

				courses.set(coursesRes.data as Course[]);
				return;
			}
			console.log('No session!');
			return;
		},
		// Finds match with given course_id from courses store
		getOne: (course_id: string) => {
			const storedCourses = get(courses);
			if (!storedCourses) {
				console.log('No courses found');
				return;
			}
			function match(course: Course) {
				return course.id == course_id;
			}
			return storedCourses.find(match);
		},
		getLessons: async (supabase: SupabaseClient<Database, 'public', never>, course_id: string) => {
			const storedCourses = get(courses);
			if (!storedCourses) {
				console.log('No courses found');
				return;
			}
			const courseIds = storedCourses.map((course) => course.id);
			const res = await supabase
				.from('lessons')
				.select()
				.in('course_id', courseIds)
				.eq('course_id', course_id);
			if (res.data) {
				return res.data as Lesson[];
			} else {
				console.log(res.error);
				return;
			}
		}
	},
	lessons: {
		getAll: async (supabase: SupabaseClient<Database, 'public', never>) => {
			const storedCourses = get(courses);
			if (!storedCourses) {
				console.log('No courses found');
				return;
			}
			const courseIds = storedCourses.map((course) => course.id);
			const res = await supabase.from('lessons').select('*').in('course_id', courseIds);
			if (res.data) {
				lessons.set(res.data as Lesson[]);
			} else {
				console.log(res.error);
				lessons.set([]);
			}
		},
		getOne: async (lesson_id: string) => {
			const storedLessons = get(lessons);
			if (!storedLessons) {
				console.log('No lessons found');
				return;
			}
			function match(lesson: Lesson) {
				return lesson.id == lesson_id;
			}
			return storedLessons.find(match);
		}
	},
	assignments: {
		getAll: async (supabase: SupabaseClient<Database, 'public', never>) => {
			const storedLessons = get(lessons);
			if (!storedLessons) {
				console.log('No lessons found');
				return;
			}
			const lessonIds = storedLessons.map((lesson) => lesson.id);
			const res = await supabase
				.from('assignments')
				.select('*')
				.in('lesson_id', lessonIds)
				.order('deadline');

			if (res.data) {
				assignments.set(res.data as Assignment[]);
			} else {
				console.log(res.error);
				assignments.set([]);
			}
		},
		getOne: async (assignment_id: string) => {
			const storedAssignments = get(assignments);
			if (!storedAssignments) {
				console.log('No assignments found');
				return;
			}
			function match(assignment: Assignment) {
				return assignment.id == assignment_id;
			}
			return storedAssignments.find(match);
		}
	}
};
