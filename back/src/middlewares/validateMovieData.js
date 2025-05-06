// EXTRA CREDIT (Considerar que también hay validaciones en submitForm.js)

const validateMovieData = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    // Verifición de campos
    if (!title) return res.status(400).json({ error: 'Title is required.' });
    if (!year) return res.status(400).json({ error: 'Year is required.' });
    if (!director) return res.status(400).json({ error: 'Director is required.' });
    if (!duration) return res.status(400).json({ error: 'Duration is required.' });
    if (!genre || genre.length === 0) return res.status(400).json({ error: 'Genre is required.' });
    if (!rate) return res.status(400).json({ error: 'Rate is required.' });
    if (!poster) return res.status(400).json({ error: 'Poster URL is required.' });

    // Validación específica: verificar que el título no sea largo
    if (title.length < 1 || title.length > 50) {
        return res.status(400).json({ error: 'Title must be between 1 and 50 characters long.' });
    }

    // Validación específica: verificar que el año tenga 4 dígitos
    if (!/^\d{4}$/.test(year)) {
        return res.status(400).json({ error: 'Year must be a 4-digit number.' });
    }

    // Validación específica: verificar que el año sea correcto
    const currentYear = new Date().getFullYear();
    if (year > currentYear) {
        return res.status(400).json({ error: 'Year cannot be in the future.' });
    }

    // Validación específica: la calificación debe ser menor a 10 y mayor a 0
    if (rate < 0 || rate > 10) {
        return res.status(400).json({ error: 'Rate must be between 0 and 10.' });
    }

    next();
};

module.exports = validateMovieData;
