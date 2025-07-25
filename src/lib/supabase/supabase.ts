// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { Task } from '@/lib/supabase/types/task';

// Configuração da conexão com o Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define the getTasks function with type annotations
export default async function getTasks(email: string): Promise<Task[]> {
  try {
    const { data, error } = await supabase.from('tasks') // Call the from method on the supabase client
      .select('*')
      .eq('user_id', email)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Erro ao buscar tarefas:", error);
      return [];  // Retorna um array vazio em caso de erro
    }

    if (data) {
        return data as Task[]; // Tipo assertion para garantir que o tipo retornado seja Task[]
    } else {
       return []; // Retorna um array vazio se não houver dados.
    }
  } catch (error) {
    console.error("Erro inesperado:", error);
    return []; // Retorna um array vazio em caso de erros inesperados.
  }
}

// Remove the from function export
// export function from(arg0: string) {
//   return supabase.from(arg0);
// }
