//qn 1
function diagonal(t) {
    return make_point(t, t);
}

// Test
draw_points(50)(diagonal);

//qn 2
function unit_square(t) {
    if (t <= 1/4) {
        const x = 4*t;
        const y = 0;
        return make_point(x, y);
    } else if (t <= 1/2) {
        const x = 1;
        const y = 4*t - 1;
        return make_point(x, y);
    } else if (t <= 3/4) {
        const x = -4*t + 3;
        const y = 1;
        return make_point(x, y);
    } else {
        const x = 0;
        const y = -4*t + 4;
        return make_point(x, y);
    }
}

// Test
draw_points_full_view_proportional(80)(unit_square);
