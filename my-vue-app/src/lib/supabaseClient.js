import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yebzeglvqfxiiwzijmmr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllYnplZ2x2cWZ4aWl3emlqbW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTM3NjEsImV4cCI6MjA1NTc4OTc2MX0.6MQl_8jO7EyCxewwvV4RancZ4cX_B5IGEfcPbjF8a5E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
