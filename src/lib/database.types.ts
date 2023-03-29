export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      assignments: {
        Row: {
          created_at: string
          deadline: string
          description: string
          id: number
          lesson_id: number
          name: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deadline?: string
          description?: string
          id?: number
          lesson_id: number
          name: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deadline?: string
          description?: string
          id?: number
          lesson_id?: number
          name?: string
          status?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          created_at: string
          created_by: string
          id: number
          name: string | null
          server_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          id?: number
          name?: string | null
          server_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: number
          name?: string | null
          server_id?: string | null
          updated_at?: string
        }
      }
      channels: {
        Row: {
          category_id: number | null
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          category_id?: number | null
          created_at?: string
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          category_id?: number | null
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
      }
      clicking_messages: {
        Row: {
          created_at: string | null
          id: number
          owner: string | null
          text: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          owner?: string | null
          text?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          owner?: string | null
          text?: string | null
        }
      }
      courses: {
        Row: {
          created_at: string
          description: string
          id: number
          name: string
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string
          id?: number
          name: string
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          name?: string
          teacher_id?: string
          updated_at?: string
        }
      }
      enrollments: {
        Row: {
          course_id: number | null
          enrolled_at: string | null
          id: number
          student_id: string | null
        }
        Insert: {
          course_id?: number | null
          enrolled_at?: string | null
          id?: number
          student_id?: string | null
        }
        Update: {
          course_id?: number | null
          enrolled_at?: string | null
          id?: number
          student_id?: string | null
        }
      }
      lessons: {
        Row: {
          course_id: number
          created_at: string
          date: string
          description: string
          duration: number
          id: number
          name: string
          status: string
          time: string
          updated_at: string
        }
        Insert: {
          course_id: number
          created_at?: string
          date: string
          description?: string
          duration: number
          id?: number
          name: string
          status?: string
          time?: string
          updated_at?: string
        }
        Update: {
          course_id?: number
          created_at?: string
          date?: string
          description?: string
          duration?: number
          id?: number
          name?: string
          status?: string
          time?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          channel_id: number
          created_at: string
          id: number
          sent_by: string | null
          text: string
          updated_at: string
        }
        Insert: {
          channel_id: number
          created_at?: string
          id?: number
          sent_by?: string | null
          text?: string
          updated_at?: string
        }
        Update: {
          channel_id?: number
          created_at?: string
          id?: number
          sent_by?: string | null
          text?: string
          updated_at?: string
        }
      }
      movieCards: {
        Row: {
          coverImage: string | null
          created_at: string | null
          description: string | null
          id: number
          name: string | null
          owner: string | null
          updated_at: string | null
        }
        Insert: {
          coverImage?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          owner?: string | null
          updated_at?: string | null
        }
        Update: {
          coverImage?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          owner?: string | null
          updated_at?: string | null
        }
      }
      notifications: {
        Row: {
          date: string | null
          id: number
          is_read: boolean | null
          message: string
          user_id: number | null
        }
        Insert: {
          date?: string | null
          id?: number
          is_read?: boolean | null
          message?: string
          user_id?: number | null
        }
        Update: {
          date?: string | null
          id?: number
          is_read?: boolean | null
          message?: string
          user_id?: number | null
        }
      }
      resources: {
        Row: {
          course_id: number
          created_at: string
          id: number
          name: string | null
          type: string | null
          updated_at: string
          url: string | null
        }
        Insert: {
          course_id: number
          created_at?: string
          id?: number
          name?: string | null
          type?: string | null
          updated_at?: string
          url?: string | null
        }
        Update: {
          course_id?: number
          created_at?: string
          id?: number
          name?: string | null
          type?: string | null
          updated_at?: string
          url?: string | null
        }
      }
      shortLink: {
        Row: {
          clicks: number
          created_at: string | null
          id: number
          owner: string | null
          slug: string
          updated_at: string | null
          url: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          clicks?: number
          created_at?: string | null
          id?: number
          owner?: string | null
          slug: string
          updated_at?: string | null
          url?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          clicks?: number
          created_at?: string | null
          id?: number
          owner?: string | null
          slug?: string
          updated_at?: string | null
          url?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
      }
      users: {
        Row: {
          auth_id: string
          avatar: string | null
          created_at: string
          email: string
          id: number
          name: string
          role: Database["public"]["Enums"]["user_role"]
          status: Database["public"]["Enums"]["user_status"]
          updated_at: string
        }
        Insert: {
          auth_id: string
          avatar?: string | null
          created_at?: string
          email: string
          id?: number
          name: string
          role: Database["public"]["Enums"]["user_role"]
          status?: Database["public"]["Enums"]["user_status"]
          updated_at?: string
        }
        Update: {
          auth_id?: string
          avatar?: string | null
          created_at?: string
          email?: string
          id?: number
          name?: string
          role?: Database["public"]["Enums"]["user_role"]
          status?: Database["public"]["Enums"]["user_status"]
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      authorize: {
        Args: {
          requested_permission: Database["public"]["Enums"]["app_permission"]
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_permission: "channels.delete" | "messages.delete"
      app_role: "admin" | "moderator"
      user_role: "teacher" | "student"
      user_status: "ONLINE" | "OFFLINE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
