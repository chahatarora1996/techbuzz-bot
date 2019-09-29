package util

import (
	"testing"
)

import "github.com/stretchr/testify/assert"

func TestUserIcon(t *testing.T) {
	actual := UserIcon("user_id_1")
	expected := "![](/api/v4/users/user_id_1/image =20x20)"
	
	assert.Equal(t, expected, actual)
}
