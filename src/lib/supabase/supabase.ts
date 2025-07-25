// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { Task } from '@/lib/supabase/types/task';

// Configuração da conexão com o Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase URL ou ANON KEY não definidos nas variáveis de ambiente.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Função para buscar tarefas do usuário
export async function getTasks(email: string): Promise<Task[]> {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', email)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro ao buscar tarefas:', error.message);
      return [];
    }

    return (data as Task[]) || [];
  } catch (error) {
    console.error('Erro inesperado ao buscar tarefas:', error);
    return [];
  }
}
