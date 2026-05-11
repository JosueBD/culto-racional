await supabase.auth.updateUser({
    password: nuevaPassword,
});
