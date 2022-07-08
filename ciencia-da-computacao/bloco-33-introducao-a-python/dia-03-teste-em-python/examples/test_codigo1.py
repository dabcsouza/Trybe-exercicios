import pytest

from codigo1 import divide_by, is_odd


def test_is_odd_when_number_is_odd_returns_true():
    assert is_odd(3) == True


def test_is_odd_when_number_is_even_returns_false():
    assert is_odd(2) == False


def test_divide_when_other_numer_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide_by(2, 0)
