import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://quwuhspddvijumtmnmuf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d3Voc3BkZHZpanVtdG1ubXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMzIyMDgsImV4cCI6MjAxNzgwODIwOH0.ML8DdbcPDMvcw8P6sGVsNtJzqFg_WYkPxSh1eyHtJU0';

const supabase = createClient(supabaseUrl, supabaseKey);
